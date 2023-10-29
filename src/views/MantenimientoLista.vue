<template>
  <div class="mantenimiento">
    <h1>Mantenimientos</h1>
    <Form></Form>
    <div class="row g-3 align-items-center p-3">
      <MantenimientoForm />
    </div> 
    <table class="table table-bordered">
      <thead class="table-primary">
        <tr>
          <th>Fecha</th>
          <th>Alquiler</th>
          <th>Mantenimiento</th>
          <th>Planta</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mantenimiento in mantenimientos" :key="mantenimiento.id">
          <td>{{ mantenimiento.fecha }}</td>
          <td>{{ mantenimiento.alquiler }}</td>
          <td>{{ mantenimiento.tipoMantenimiento }}</td>
          <td>{{ mantenimiento.planta }}</td>
          <td>{{ mantenimiento.usuario }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

  
<script>
import Form from '../components/FormMantenimiento.vue'
export default {
  data() {
    return {
      mantenimientos: [
        {
          id: 1,
          fecha: '2023-10-01',
          alquiler: 'Alquiler 1',
          tipoMantenimiento: 'Mantenimiento A',
          planta: 'Planta 1',
          usuario: 'Usuario 1',
        },
        {
          id: 2,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 2',
          tipoMantenimiento: 'Mantenimiento B',
          planta: 'Planta 2',
          usuario: 'Usuario 2',
        },{
          id: 3,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento B',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },{
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        }
        // Ejemplos de datos
      ],
    };
  },components: {
    Form, // Registra el componente para su uso en esta vista
  },
};
</script>
  


<style scoped>
/* Agrega estilos personalizados para esta vista  */
.mantenimiento {
  text-align: center;
  padding: 20px;
  margin: 20px;
}
</style>
  