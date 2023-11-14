<template>
  <Breadcrumbs></Breadcrumbs>
  <div class="mantenimiento">
    <h1 class="text-center">Mantenimientos:</h1>
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h3 class="mb-0">Lista de Mantenimientos</h3>
        <router-link to="/mantenimiento/alta-mantenimiento">
          <button class="btn btn-primary">
            <font-awesome-icon icon="plus" /> Nuevo
          </button>
        </router-link>
      </div>
      <table class="table table-striped">
        <thead class="table">
          <tr>
            <th>Fecha</th>
            <th>Alquiler</th>
            <th>Mantenimiento</th>
            <th>Planta</th>
            <th>Usuario</th>
            <th>Acciones</th> <!-- Columna de acciones -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="mantenimiento in mantenimientos" :key="mantenimiento.id">
            <td>{{ mantenimiento.fecha }}</td>
            <td>{{ mantenimiento.alquiler }}</td>
            <td>{{ mantenimiento.tipoMantenimiento }}</td>
            <td>{{ mantenimiento.planta }}</td>
            <td>{{ mantenimiento.usuario }}</td>
            <td>
              <button class="btn" @click="eliminar"><font-awesome-icon :icon="['fas', 'eye']"  /></button>
              <button class="btn" @click="editar"><font-awesome-icon :icon="['fas', 'pen']" /></button>
              <button class="btn" @click="eliminar"><font-awesome-icon :icon="['fas', 'trash']" /></button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


  
<script>
import Form from '../components/mantenimientos/FormMantenimiento.vue'
import Breadcrumbs from '../components/generales/Breadcrumbs.vue';
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
        }, {
          id: 3,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento B',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        }, {
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
  }, components: {
    Form,
    Breadcrumbs, // Registra el componente para su uso en esta vista
  },
};
</script>
  


<style scoped>
/* Agrega estilos personalizados para esta vista  */
.mantenimiento {
  padding: 20px;
  margin: 10px;

}
</style>
  