<template>
  <Breadcrumbs></Breadcrumbs>
  <div class="alta">
    <h1 class="my-4">
      Alta Nuevo Mantenimiento
    </h1>
    <div class="card p-0">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h3>
          <font-awesome-icon icon="gear" />
          Datos mantenimiento
        </h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm" class="my-5 d-flex justify-content-center align-items-center">
          <div class="col-md-6">
            <div class="row mb-3">
              <label for="fecha" class="col-sm-4 col-form-label">Fecha del Mantenimiento:</label>
              <div class="col-sm-8">
                <input type="date" id="fecha" v-model="nuevoMantenimiento.fecha" class="form-control" required>
              </div>
            </div>

            <!-- Desplegable para "Alquiler" -->
            <div class="row mb-3">
              <label for="alquiler" class="col-sm-4 col-form-label">Alquiler:</label>
              <div class="col-sm-8">
                <select id="alquiler" v-model="nuevoMantenimiento.alquiler" class="form-control" required>
                  <option value="1">Alquiler 1</option>
                  <option value="2">Alquiler 2</option>
                  <!-- Agrega más opciones según sea necesario -->
                </select>
              </div>
            </div>

            <!-- Desplegable para "Planta" -->
            <div class="row mb-3">
              <label for="planta" class="col-sm-4 col-form-label">Planta:</label>
              <div class="col-sm-8">
                <select id="planta" v-model="nuevoMantenimiento.planta" class="form-control" required>
                  <option value="planta1">Planta 1</option>
                  <option value="planta2">Planta 2</option>
                  <!-- Agrega más opciones según sea necesario -->
                </select>
              </div>
            </div>

            <!-- Desplegable para "Usuario" -->
            <div class="row mb-3">
              <label for="usuario" class="col-sm-4 col-form-label">Usuario:</label>
              <div class="col-sm-8">
                <select id="usuario" v-model="nuevoMantenimiento.usuario" class="form-control" required>
                  <option value="usuario1">Usuario 1</option>
                  <option value="usuario2">Usuario 2</option>
                  <!-- Agrega más opciones según sea necesario -->
                </select>
              </div>
            </div>

            <div class="form-group">
              <!-- Cambiado el nombre del campo "Detalle" a "tipoMantenimiento" -->
              <label for="tipoMantenimiento">Detalle mantenimiento:</label>
              <textarea id="tipoMantenimiento" v-model="nuevoMantenimiento.tipoMantenimiento" class="form-control" required></textarea>
            </div>

            <div class="mt-2 d-flex justify-content-between">
              <router-link to="/mantenimiento" class="btn btn-secondary">Cancelar</router-link>
              <button type="submit" class="btn btn-primary col-sm-2">Agregar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../generales/Breadcrumbs.vue';
import axios from 'axios';

export default {
  data() {
    return {
      nuevoMantenimiento: {
        fecha: '',
        alquiler: '',
        planta: '',
        usuario: '',
        tipoMantenimiento: '', // Cambiado el nombre del campo "Detalle" a "tipoMantenimiento"
      },
    };
  },
  components: {
    Breadcrumbs,
  },
  methods: {
    submitForm() {
      // Enviar datos a la API
      axios.post('http://localhost:4004/api/mantenimiento/mantenimientos', this.nuevoMantenimiento)
        .then(response => {
          alert('Mantenimiento creado correctamente');
          this.$router.push('/mantenimiento');
        })
        .catch(error => {
          console.error('Error al crear el mantenimiento:', error);
        });
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}

.alta {
  padding: 20px;
  margin: 10px;
}
</style>
