<template>
  <div>
    <Breadcrumbs></Breadcrumbs>
    <div class="contenedor mt-4">
      <h1 class="my-4">Alquileres</h1>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h3 class="mb-0">
            <font-awesome-icon icon="list" />
            Listado de Alquileres actuales
          </h3>
          <router-link to="/alquileres/nuevo_alquiler">
            <button class="btn btn-primary">
              <font-awesome-icon icon="plus" /> Nuevo
            </button>
          </router-link>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Empresa</th>
              <th>Monto Base</th>
              <th>Fecha Inicio</th>
              <th>Fecha Finalizacion</th>
              <th>Vendedor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alquiler in alquileres" :key="alquiler.alquiler_id">
              <td>{{ alquiler.alquiler_id }}</td>
              <td>{{ alquiler.empresa_id }}</td>
              <td>{{ "USD " + alquiler.monto_base }}</td>
              <td>{{ alquiler.fecha_inicio }}</td>
              <td>{{ alquiler.fecha_fin }}</td>
              <td>{{ alquiler.vendedor_id }}</td>
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
import nuevo_alquiler from './nuevo_alquiler.vue';

export default {
  data() {
    return {
      alquileres: [],
    };
  },
  components: {
    Breadcrumbs,
    nuevo_alquiler,
  },
  methods: {
    ver() {
      // 
    },
    editar() {
      //
    },
    eliminar() {
      //
    },
  },
  created() {
    // Realiza la solicitud HTTP para obtener los alquileres desde tu API local
    // Asume que la API está en http://localhost:3000/api/remitos
    fetch('http://localhost:4004/api/alquiler')
      .then(response => response.json())
      .then(data => {
        this.alquileres = data.data;
      })
      .catch(error => console.error('Error fetching alquileres:', error));
  },
};
</script>

<style scoped>
/* Agrega estilos personalizados para esta vista */
.contenedor {
  padding: 20px;
  margin-top: 10px;
}
.card {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}
</style>
