<template>
  <div class="container">
    <h1 class="mt-4">Registrar Remito</h1>
    <form @submit.prevent="submitForm" class="mt-4">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="monto">Monto en $:</label>
            <input type="number" id="monto" v-model="nuevoRemito.monto" class="form-control" required>
          </div>
        </div>
        <div class="col-md-6">
          <label for="fecha">Fecha del Remito:</label>
            <input type="date" id="fecha" v-model="nuevoRemito.fecha" class="form-control" required>
        </div>

        
      </div>

      <div class="form-group">
        <div class="form-group form-check">
            <input type="checkbox" id="conformidad" class="form-check-input" v-model="nuevoRemito.conformidad">
            <label class="form-check-label" for="conformidad">Existe Conformidad</label>
          </div>
      </div>


      <div class="form-group">
        <label for="alquiler_id">Alquiler En referencia (usar el ID):</label>
            <input type="number" id="alquiler_id" v-model="nuevoRemito.alquiler_id" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="cobro_id">Cobro En referencia (usar el ID):</label>
        <input type="number" id="cobro_id" v-model="nuevoRemito.cobro_id" class="form-control" required>
      </div>


      <div class="form-group">
        <label for="detalle">Detalles del Remito:</label>
        <input type="text" id="detalle" v-model="nuevoRemito.detalle" class="form-control" required>
      </div>

      <button type="submit" class="btn btn-primary">Registrar Remito</button>
    </form>
  </div>
</template>

  <script>
  export default {
    data() {
      return {
        nuevoRemito: {
          monto: null,
          conformidad: false,
          detalle: "",
          fecha: null,
          alquiler_id: null,
          cobro_id: null,
        },
      };
    },
    methods: {
      submitForm() {

        //logica para enviar los datos a la api
        console.log("Datos del nuevo remito:", this.nuevoRemito);
      },
    },
  };
  </script>
  
  <style>

  </style>
  