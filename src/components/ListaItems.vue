<template>
  <div class="container">
    <h2>Empleados</h2>
    <router-link to="/crear" class="btn btn-success">Dar de alta</router-link>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Fecha de nacimiento</th>
            <th scope="col">Puesto</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="empleado in empleados" :key="empleado.id">
            <th>{{ empleado.id }}</th>
            <td>{{ empleado.nombres }}</td>
            <td>{{ empleado.apellidos }}</td>
            <td>{{ empleado.fecha_nacimiento }}</td>
            <td>{{ empleado.posicion }}</td>
            <td>
              <div class="btn-group" role="group" aria-label="">
                <router-link
                  :to="{ name: 'Editar', params: { id:empleado.id } }"
                  class="btn btn-primary"
                  >Editar</router-link
                >
                <button
                  type="button"
                  v-on:click="borrarEmpleado(empleado.id)"
                  class="btn btn-danger"
                >
                  Borrar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empleados: [],
    };
  },

  created: function () {
    this.consultarEmpleados();
  },
  methods: {
    //http://localhost/empleados/
    consultarEmpleados() {
      fetch("http://localhost/empleados/")
        .then((response) => response.json())
        .then((datosResponse) => {
          console.log(datosResponse);
          this.empleados = [];
          if (typeof datosResponse[0].succes === "undefined") {
            this.empleados = datosResponse;
          }
        })
        .catch(console.log);
    },
    borrarEmpleado(id) {
      console.log(id);
      fetch("http://localhost/empleados/?borrar=" + id)
        .then((response) => response.json())
        .then((datosResponse) => {
          console.log(datosResponse);
          window.location.assign("/");
        })
        .catch(console.log);
    },
  },
};
</script>
