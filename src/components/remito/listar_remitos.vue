<template>
  <div>
    <Breadcrumbs></Breadcrumbs>
    <div class="contenedor mt-4">
      <h1 class="my-4">Remitos</h1>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h3 class="mb-0">
            <font-awesome-icon icon="list" />
            Listado de Remitos actuales
          </h3>
          <router-link to="/remitos/nuevo_remito">
            <button class="btn btn-primary">
              <font-awesome-icon icon="plus" /> Nuevo
            </button>
          </router-link>
        </div>
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
              <th>Acciones</th>
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
              <td>
                <button class="btn" @click="ver"><font-awesome-icon :icon="['fas', 'eye']" /></button>
                <button class="btn" @click="editar"><font-awesome-icon :icon="['fas', 'pen']" /></button>
                <button class="btn" @click="eliminar"><font-awesome-icon :icon="['fas', 'trash']" /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../generales/Breadcrumbs.vue';
import nuevo_remito from './nuevo_remito.vue';

export default {
  data() {
    return {
      remitos: [],
    };
  },
  components: {
    Breadcrumbs,
    nuevo_remito,
  },
  methods: {
    ver() {
      // Lógica para ver el detalle del remito
    },
    editar() {
      // Lógica para editar el remito
    },
    eliminar() {
      // Lógica para eliminar el remito
    },
  },
  created() {
    // Realiza la solicitud HTTP para obtener los remitos desde tu API local
    // Asume que la API está en http://localhost:3000/api/remitos
    fetch('http://localhost:4004/api/remito/all')
      .then(response => response.json())
      .then(data => {
        this.remitos = data.data;
      })
      .catch(error => console.error('Error fetching remitos:', error));
  },
};
</script>

<style scoped>
/* Agrega estilos personalizados para esta vista */
.contenedor {
  padding: 20px;
  margin-top: 10px;
}
</style>
