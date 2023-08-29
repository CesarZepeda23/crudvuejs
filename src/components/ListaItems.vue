<template>
 <div class="container">
    <h2>Empleados</h2>
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
          <th>{{empleado.Id}}</th>
          <td>{{empleado.nombres}}</td>
          <td>{{empleado.apellidos}}</td>
          <td>{{empleado.fecha_nacimiento}}</td>
          <td>{{empleado.posicion}}</td>
          <td>
            <button type="button" class="btn btn-primary" @click="editarEmpleado(empleado)">Editar</button>
            <button type="button" class="btn btn-danger" @click="eliminarEmpleado(empleado.id)">Eliminar</button>
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
  },
};
</script>
