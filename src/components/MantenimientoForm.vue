<template>
    <form @submit="submitForm" class="my-3">
      <div class="row mb-3">
        <label for="fecha" class="col-sm-2 col-form-label">Fecha:</label>
        <div class="col-sm-3">
            <input type="date" id="fecha" v-model="nuevoMantenimiento.fecha" class="form-control">
        </div>        
     </div>
      <div class="row mb-3">
        <label for="alquiler" class="col-sm-2 col-form-label">Alquiler:</label>
        <div class="col-sm-3">
            <input type="text" id="alquiler" v-model="nuevoMantenimiento.alquiler" class="form-control">
        </div>
        
      </div>
      <!-- Otros campos del formulario -->
      <div class="row mb-5">
        <button type="submit" class="btn btn-primary col-sm-4">Guardar Mantenimiento</button>
      </div>
    </form>
  </template>
  
  <script>
export default {
  data() {
    return {
      nuevoMantenimiento: {
        fecha: '',
        alquiler: '',
        // Agrega otros campos del formulario aquí
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
      console.log('Datos del nuevo mantenimiento:', this.nuevoMantenimiento);
      // Reinicia el formulario o redirige al usuario según tus necesidades
      this.nuevoMantenimiento = {
        fecha: '',
        alquiler: '',
        // Restablece otros campos del formulario
      };
    }
  }
};
</script>
