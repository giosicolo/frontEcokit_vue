<template>
  <div>
    <Breadcrumbs></Breadcrumbs>
    <div class="container mt-4">
      <h1 class="my-4">Detalles del Remito</h1>
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Remito del {{ remito.fecha }}</h3>
        </div>
        <div class="card-body">
          <dl class="row">
            <dt class="col-sm-3">Monto:</dt>
            <dd class="col-sm-9">{{ remito.monto }}</dd>

            <dt class="col-sm-3">Conformidad:</dt>
            <dd class="col-sm-9">{{ remito.conformidad ? 'Sí' : 'No' }}</dd>

            <dt class="col-sm-3">Detalle:</dt>
            <dd class="col-sm-9">{{ remito.detalle }}</dd>

            <dt class="col-sm-3">Fecha:</dt>
            <dd class="col-sm-9">{{ remito.fecha }}</dd>

            <dt class="col-sm-3">Alquiler:</dt>
            <dd class="col-sm-9">Alquiler {{ remito.alquiler_id }}</dd>

            <dt class="col-sm-3">Cobro:</dt>
            <dd class="col-sm-9">Cobro {{ remito.cobro_id }}</dd>
          </dl>

          <qrcode-vue :value="generarTextoQR()" />

          <div class="mt-2">
            <router-link to="/remitos">
              <button class="btn btn-secondary">Atrás</button>
            </router-link>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../generales/Breadcrumbs.vue';
import axios from 'axios';
import QrcodeVue from 'qrcode.vue';


export default {

  components: {
    Breadcrumbs,
    QrcodeVue,
  },
  created() {
      //obtener el id del remito de la URL
      this.remito_id = this.$route.params.remito_id;
      console.log("Obteniendo remito con ID:", this.remito_id);
      axios
        .get(`http://localhost:4004/api/remito/${this.remito_id}`)
        .then((response) => {
          this.remito = response.data.data;
          console.log("Datos del remito:", this.remito);

        })
        .catch((error) => console.log(error));    
      },
  data() {
    return {
      remito: {},
      remito_id: null,
    };
  },
  methods: {
    generarTextoQR() {
      return `Monto: ${this.remito.monto}
      Conformidad: ${this.remito.conformidad ? 'Sí' : 'No'}
      Detalle: ${this.remito.detalle}
      Fecha: ${this.remito.fecha}
      Alquiler ID: ${this.remito.alquiler_id}
      Cobro ID: ${this.remito.cobro_id}`;
    },
  },
};
</script>

<style scoped>
/* Agrega estilos personalizados para esta vista */
.container {
  padding: 20px;
  margin-top: 10px;
}

.qrcode {
margin-top: 20px;
}
</style>
