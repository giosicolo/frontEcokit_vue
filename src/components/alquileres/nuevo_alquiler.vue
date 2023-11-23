<template>
  <div>
    <Breadcrumbs></Breadcrumbs>

    <div class="alta">
      <h1>Alta Nuevo Alquiler</h1>
      <div class="card p-0">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h3 class="p-0 text-center">Datos Alquiler</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm" class="my-5 d-flex justify-content-center align-items-center">
            <div class="col-md-6">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="empresa">Empresa:</label>
                  <select v-model="empresa" class="form-control">
                    <option value="">Selecciona una empresa</option>
                    <option v-for="empresa in empresas" :value="empresa.empresa_id">{{ empresa.razon_social }}</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="yacimiento">Yacimiento:</label>
                  <select v-model="yacimiento" class="form-control">
                    <!-- Opciones para seleccionar el yacimiento -->
                  </select>
                </div>
              </div>

              <div class="row mb-3 border-top my-4 mt-2">
                <div class="col-md-6 mt-3">
                  <label for="fechaInicio">Fecha de inicio:</label>
                  <input type="date" v-model="fechaInicio" class="form-control">
                </div>
                <div class="col-md-6 mt-3">
                  <label for="fechaFinal">Fecha final:</label>
                  <input type="date" v-model="fechaFinal" class="form-control">
                </div>
              </div>

              <div class="row mb-3 border-top my-4 mt-2">
                <div class="col-md-4 mt-3">
                  <label for="tipoPlanta">Tipo de planta:</label>
                  <div class="form-check">
                    <input type="radio" id="movil" value="movil" v-model="tipoPlanta" class="form-check-input">
                    <label for="movil" class="form-check-label">Móvil</label>
                  </div>
                  <div class="form-check">
                    <input type="radio" id="permanente" value="permanente" v-model="tipoPlanta" class="form-check-input">
                    <label for="permanente" class="form-check-label">Permanente</label>
                  </div>
                </div>
                <div class="col-md-4 mt-3">
                  <label for="cantidadPlantas">Cantidad de plantas a alquilar:</label>
                  <input type="number" v-model="cantidadPlantas" class="form-control">
                </div>
                <div class="col-md-4 mt-3">
                  <label for="capacidadPlantas">Capacidad de las plantas:</label>
                  <select v-model="capacidadPlantas" class="form-control">
                    <option value="500">500 litros</option>
                    <option value="1000">1000 litros</option>
                    <option value="2000">2000 litros</option>
                  </select>
                </div>
              </div>

              <div class="mt-2 d-flex justify-content-between">
                <router-link to="/remitos" class="btn btn-secondary">Cancelar</router-link>
                <button type="submit" class="btn btn-primary">Previsualizar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div>
      <Dropdowns></Dropdowns>
    </div>

  </div>
</template>

     
<script>
import Breadcrumbs from '../generales/Breadcrumbs.vue';
import axios from "axios";
import Dropdowns from "../alquileres/Dropdown.vue";

export default {
  data() {
    return {
      empresa: "",
      yacimiento: "",
      fechaFinal: "",
      tipoPlanta: "",
      cantidadPlantas: 0,
      capacidadPlantas: "500",
      empresas: [], // Para almacenar la lista de empresas
    };
  },
  methods: {
    submitForm() {
      const formData = {
        empresa: this.empresa,
        yacimiento: this.yacimiento,
        fechaInicio: this.fechaInicio,
        fechaFinal: this.fechaFinal,
        tipoPlanta: this.tipoPlanta,
        cantidadPlantas: this.cantidadPlantas,
        capacidadPlantas: this.capacidadPlantas,
      };
      // Aquí puedes enviar formData a través de una llamada API o realizar otras acciones necesarias.
    },
    async fetchEmpresas() {
      try {
        const response = await axios.get("http://localhost:4004/api/empresa/");
        this.empresas = response.data.data;
        // Almacena la lista de empresas
      }
      catch (error) {
        console.error("Error al obtener la lista de empresas", error);
      }
    },
    async fetchYacimientoDeEmpresa() {
      try {
        //const response = await axios.get("http://localhost:4004/api/empresa/");
        // this.empresas = response.data.data; 
        // Almacena la lista de empresas
      }
      catch (error) {
        console.error("Error al obtener la lista de empresas", error);
      }
    },
  },
  mounted() {
    // Llama al método para obtener la lista de empresas cuando el componente se carga
    this.fetchEmpresas();
  },
  components: { Breadcrumbs, Dropdowns }
};





</script>
<style>
.alta {
  padding: 20px;
  margin: 10px;

}

.card {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}
</style>
