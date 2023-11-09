<template>
  <Breadcrumbs></Breadcrumbs>
  <div class="row m-5">
    <h1 class="text-center">Alta Nuevo Mantenimiento:</h1>
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h3 class="mb-0 text-center">Mantenimiento</h3>
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

            <div class="row mb-3">
              <label for="alquiler" class="col-sm-4 col-form-label">Alquiler:</label>
              <div class="col-sm-8">
                <input type="number" id="alquiler" v-model="nuevoMantenimiento.alquiler" class="form-control" required>
              </div>
            </div>

            <div class="form-group">
              <label for="detalle">Detalles del Mantenimiento:</label>
              <textarea id="detalle" v-model="nuevoMantenimiento.detalle" class="form-control" required></textarea>
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
import Breadcrumbs from '../components/Breadcrumbs.vue';
export default {
  data() {
    return {
      nuevoMantenimiento: {
        fecha: '',
        alquiler: '',
        detalle: '',
        // Agrega otros campos del formulario
      },
    };
  },
  components: {
    Breadcrumbs, // Registra el componente para su uso en esta vista
  },
  methods: {
    submitForm() {
      // aca se pueden enviar los datos a la API
      console.log('Datos del nuevo mantenimiento:', this.nuevoMantenimiento);
      // Reinicia el formulario o redirige al usuario
      this.nuevoMantenimiento = {
        fecha: '',
        alquiler: '',
        detalle: '',
        // Restablece otros campos del formulario
      };
    },
  },
};
</script>
