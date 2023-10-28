<template>
    <div class="container">
      <h1 class="my-4">Listado de Remitos</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Monto</th>
            <th>Conformidad</th>
            <th>Detalle</th>
            <th>Fecha</th>
            <th>Alquiler ID</th>
            <th>Cobro ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="remito in remitos" :key="remito.remito_id">
            <td>{{ remito.remito_id }}</td>
            <td>{{ remito.monto }}</td>
            <td>{{ remito.conformidad ? 'Sí' : 'No' }}</td>
            <td>{{ remito.detalle }}</td>
            <td>{{ remito.fecha }}</td>
            <td>{{ remito.alquiler_id }}</td>
            <td>{{ remito.cobro_id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>



  <script>
  export default {
    data() {
      return {
        //remitos de ejemplo
        remitos: [
        {
          remito_id: 1,
          monto: 100.00,
          conformidad: true,
          detalle: "Remito de prueba 1",
          fecha: "2023-10-29",
          alquiler_id: 101,
          cobro_id: 201,
        },
        {
          remito_id: 2,
          monto: 150.50,
          conformidad: false,
          detalle: "Remito de prueba 2",
          fecha: "2023-10-30",
          alquiler_id: 102,
          cobro_id: 202,
        },
        {
          remito_id: 3,
          monto: 75.25,
          conformidad: true,
          detalle: "Remito de prueba 3",
          fecha: "2023-10-31",
          alquiler_id: 103,
          cobro_id: 203,
        },
        ],
    
    };
    },
    created() {
      
        //metodo similar al OnCreate para cargar los remitos desde la api
        

    },
  };
  </script>
  
  <style>

  </style>
  