<template>
    

   
    <form @submit="submitForm" class="custom-form">
       <div class="form-group">
         <label for="empresa">Empresa:</label>
         <select v-model="empresa" class="form-control">
  <option value="">Selecciona una empresa</option>
  <option v-for="empresa in empresas" :value="empresa.empresa_id">{{ empresa.razon_social }}</option>
</select>
       </div>
       <div class="form-group">
         <label for="yacimiento">Yacimiento:</label>
         <select v-model="yacimiento" class="form-control">
           <!-- Opciones para seleccionar el yacimiento -->
         </select>
       </div>
   
       <div class="form-group">
         <label for="fechaInicio">Fecha de inicio:</label>
         <input type="date" v-model="fechaInicio" class="form-control">
       </div>
   
       <div class="form-group">
         <label for="fechaFinal">Fecha final:</label>
         <input type="date" v-model="fechaFinal" class="form-control">
       </div>
   
       <div class="form-group">
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
   
       <div class="form-group">
         <label for="cantidadPlantas">Cantidad de plantas a alquilar:</label>
         <input type="number" v-model="cantidadPlantas" class="form-control">
       </div>
   
       <div class="form-group">
         <label for="capacidadPlantas">Capacidad de las plantas:</label>
         <select v-model="capacidadPlantas" class="form-control">
           <option value="500">500 litros</option>
           <option value="1000">1000 litros</option>
           <option value="2000">2000 litros</option>
         </select>
       </div>
   
       <div class="form-group text-center" style="margin-top: 20px;">
       <button type="submit" class="btn btn-primary">Buscar Plantas disponibles</button>
     </div>
   
 </form>
   </template>
   
     
   <script>
  
  import axios from "axios";
  
  export default {
     data() {
       return {
         empresa: "",
         yacimiento: "",
         fechaInicio: "",
         fechaFinal: "",
         tipoPlanta: "",
         cantidadPlantas: 0,
         capacidadPlantas: "500", // Valor predeterminado a 500 litros

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
        console.log("PASSAAAA")
        // Almacena la lista de empresas
      } catch (error) {
        console.error("Error al obtener la lista de empresas", error);
      }
    },

     },

     mounted() {
    // Llama al método para obtener la lista de empresas cuando el componente se carga
    this.fetchEmpresas();

  },
   };





   </script>
 
 <style>
 .custom-form {
   max-width: 400px; /* Ancho máximo del formulario */
   margin: 0 auto; /* Centrar el formulario horizontalmente */
   padding: 20px; 
   margin-top: 20px; 
   margin-bottom: 20px;
   border: 1px solid #ccc; /* Agregar un borde */
   border-radius: 5px; 
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Agregar sombra al formulario */
 }
 </style>