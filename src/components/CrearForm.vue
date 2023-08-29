<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Alta de empleados</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="form-group">
            <label for="nombres">Nombre(s):</label>
            <input
              type="text"
              name="nombres"
              required
              id="nombres"
              class="form-control"
              v-model="empleado.nombres"
              placeholder="Escribe los nombres del empleado"
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input
              type="text"
              class="form-control"
              required
              v-model="empleado.apellidos"
              name="apellidos"
              id="apellidos"
              aria-describedby="helpId"
              placeholder="Escribe los apellidos del empleado"
            />
          </div>
          <div class="form-group">
            <label for="posicion">Puesto</label>
            <input
              type="text"
              name="posicion"
              id="posicion"
              required
              class="form-control"
              v-model="empleado.posicion"
              placeholder="fecha_nacimiento"
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group">
            <label for="fecha_nacimiento"></label>
            <input
              type="date"
              name="fecha_nacimiento"
              id="fecha_nacimiento"
              class="form-control"
              required
              v-model="empleado.fecha_nacimiento"
              placeholder=""
              aria-describedby="helpId"
            />
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-primary">Agregar</button>
            <router-link to="/" class="btn btn-warning">Cancelar</router-link>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empleado: {},
    };
  },
  methods: {
    agregarRegistro() {
      console.log(this.empleado);

      var datosEnviar = {
        nombres: this.empleado.nombres,
        apellidos: this.empleado.apellidos,
        posicion: this.empleado.posicion,
        fecha_nacimiento: this.empleado.fecha_nacimiento,
      };

      fetch("http://localhost/empleados/?insertar=1", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
      })
      .then(response => response.json())
      .then((datosResponse =>{
        console.log(datosResponse);
        window.location.assign('/');
      })) 
    },
  },
};
</script>