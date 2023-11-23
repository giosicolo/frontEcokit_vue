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
          <thead class="table">
            <tr>
              <th class="d-none d-sm-table-cell">ID</th>
              <th>Empresa</th>
              <th>Monto Base</th>
              <th>Fecha Inicio</th>
              <th>Fecha Finalizacion</th>
              <th class="d-none d-sm-table-cell">Vendedor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alquiler in paginatedAlquileres" :key="alquiler.id">
              <td class="d-none d-sm-table-cell">{{ alquiler.alquiler_id }}</td>
              <td>{{ alquiler.empresa_id }}</td>
              <td>{{ "USD " + alquiler.monto_base }}</td>
              <td>{{ alquiler.fecha_inicio }}</td>
              <td>{{ alquiler.fecha_fin }}</td>
              <td class="d-none d-sm-table-cell">{{ alquiler.vendedor_id }}</td>
              <td>
                <button class="btn" @click="ver"><font-awesome-icon :icon="['fas', 'eye']" /></button>
                <button class="btn" @click="editar"><font-awesome-icon :icon="['fas', 'pen']" /></button>
                <button class="btn" @click="eliminar(alquiler.alquiler_id)"><font-awesome-icon :icon="['fas', 'trash']" /></button>
              </td>
            </tr>
          </tbody>
          <tfoot v-if="totalPaginas > 1">
          <tr>
            <td colspan="6" class="text-center">
              <button @click="paginaAnterior" class="link-button m-1" :disabled="paginaActual === 1">Anterior</button>
              <span>{{ paginaActual }} de {{ totalPaginas }}</span>
              <button @click="paginaSiguiente" class="link-button m-1" :disabled="paginaActual === totalPaginas">Siguiente</button>
            </td>
          </tr>
        </tfoot>
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
      filtro: '',
      alquileres: [],
      elementosPorPagina: 8,
      paginaActual: 1,
    };
  },
  computed: {
    paginatedAlquileres() {
      const filteredData = this.alquileres.filter(alquiler =>
        Object.values(alquiler).some(valor =>
          valor && valor.toString().toLowerCase().includes(this.filtro.toLowerCase().trim())
        )
      );

      const startIndex = (this.paginaActual - 1) * this.elementosPorPagina;
      const endIndex = startIndex + this.elementosPorPagina;

      return filteredData.slice(startIndex, endIndex);
    },
    totalPaginas() {
      return Math.ceil(this.alquileres.length / this.elementosPorPagina);
    },
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
    eliminar(alquilerId) {

      if (confirm('¿Estás seguro de que deseas eliminar este alquiler?')) {

        fetch(`http://localhost:4004/api/alquiler/${alquilerId}`, {
          method: 'DELETE',
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al eliminar el alquiler');
            }
            this.obtenerAlquileres();
          })
          .catch(error => console.error('Error al eliminar el alquiler:', error));
      }
    },
  },
  obtenerAlquileres() {
    fetch('http://localhost:4004/api/alquiler')
      .then(response => response.json())
      .then(data => {
        this.alquileres = data.data;
      })
      .catch(error => console.error('Error fetching alquileres:', error));
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
.link-button {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font: inherit;
  outline: inherit;
}

</style>
