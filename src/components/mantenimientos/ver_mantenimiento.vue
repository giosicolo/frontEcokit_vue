<template>
    <div>
      <Breadcrumbs></Breadcrumbs>
      <div class="container mt-4">
        <h1 class="my-4">Detalles del Remito</h1>
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Remito del {{ mantenimiento.fecha }}</h3>
          </div>
          <div class="card-body">
            <dl class="row">
              <dt class="col-sm-3">Alquiler:</dt>
              <dd class="col-sm-9">{{ mantenimiento.alquiler }}</dd>
  
              <dt class="col-sm-3">Conformidad:</dt>
              <dd class="col-sm-9">{{ mantenimiento.planta ? 'Sí' : 'No' }}</dd>
  
              <dt class="col-sm-3">Usuario:</dt>
              <dd class="col-sm-9">{{ mantenimiento.usuario }}</dd>
  
              <dt class="col-sm-3">Fecha:</dt>
              <dd class="col-sm-9">{{ mantenimiento.fecha }}</dd>
  
              <dt class="col-sm-3">Alquiler ID:</dt>
              <dd class="col-sm-9">Alquiler {{ mantenimiento.alquiler }}</dd>
  
              <dt class="col-sm-3">Planta:</dt>
              <dd class="col-sm-9">{{ mantenimiento.planta }}</dd>
            </dl>
            <div class="mt-2">
              <router-link to="/mantenimiento">
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


  export default {
  
    components: {
      Breadcrumbs,
    },
    created() {
        //obtener el id del remito de la URL
        this.mant_id = this.$route.params.mant_id;
        console.log("Obteniendo mantenimiento con ID:", this.mant_id);
        axios
          .get(`http://localhost:4004/api/mantenimiento/mantenimientos/${this.mant_id}`)
          .then((response) => {
            this.mantenimiento = response.data;
            console.log("Datos del Mantenimiento:", this.mantenimiento);

          })
          .catch((error) => console.log(error));    },
    data() {
      return {
        mantenimiento: {},
        mant_id: null,
      };
    }
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados para esta vista */
  .container {
    padding: 20px;
    margin-top: 10px;
  }
  </style>
  