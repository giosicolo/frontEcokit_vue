<template>
  <Breadcrumbs></Breadcrumbs>
  <div class="mantenimiento">
    <h1 class="my-4">Mantenimientos</h1>
    <div class="col-md-3 input-group mb-3 contenedor-buscador">
      <input type="text" class="form-control buscador" placeholder="Buscar mantenimiento" v-model="filtro">
      <div class="input-group-append">
        <span class="input-group-text icono-buscador">
          <font-awesome-icon class="fa-1x" icon="search" />
        </span>
      </div>
    </div>

    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h3 class="mb-0">
          <font-awesome-icon icon="list" />
          Listado de mantenimientos actuales
        </h3>
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
            <th>Descripción</th>
            <th>Planta</th>
            <th>Usuario</th>
            <th>Acciones</th> <!-- Columna de acciones -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="mantenimiento in paginatedMantenimientos" :key="mantenimiento.id">
            <td>{{ mantenimiento.fecha }}</td>
            <td>{{ mantenimiento.alquiler }}</td>
            <td>{{ mantenimiento.tipoMantenimiento }}</td>
            <td>{{ mantenimiento.planta }}</td>
            <td>{{ mantenimiento.usuario }}</td>
            <td>
              <router-link :to="'/mantenimiento/' + mantenimiento.id">
                <button class="btn"><font-awesome-icon :icon="['fas', 'eye']" /></button>
              </router-link>
              <router-link :to="'/mantenimiento/editar/' + mantenimiento.id">
                <button class="btn"><font-awesome-icon :icon="['fas', 'pen']" /></button>
              </router-link>
              <button class="btn" @click="eliminarMantenimiento(mantenimiento.id)"><font-awesome-icon :icon="['fas', 'trash']" /></button>
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
</template>

<script>
import axios from 'axios';
import Breadcrumbs from '../generales/Breadcrumbs.vue';

export default {
  data() {
    return {
      filtro: '',
      mantenimientos: [],
      elementosPorPagina: 8,
      paginaActual: 1,
    };
  },
  computed: {
    paginatedMantenimientos() {
      const filteredData = this.mantenimientos.filter(mantenimiento =>
        Object.values(mantenimiento).some(valor =>
          valor && valor.toString().toLowerCase().includes(this.filtro.toLowerCase().trim())
        )
      );

      const startIndex = (this.paginaActual - 1) * this.elementosPorPagina;
      const endIndex = startIndex + this.elementosPorPagina;

      return filteredData.slice(startIndex, endIndex);
    },
    totalPaginas() {
      return Math.ceil(this.mantenimientos.length / this.elementosPorPagina);
    },
  },
  methods: {
    async eliminarMantenimiento(mantenimientoId) {
      try {

        if (!confirm('¿Estás seguro de que quieres eliminar este mantenimiento?')) {
          return;
        }


        await axios.delete(`http://localhost:4004/api/mantenimiento/mantenimientos/${mantenimientoId}`);
        this.obtenerMantenimientos(); // Actualizar la lista después de eliminar
      } catch (error) {
        console.error('Error al eliminar el mantenimiento:', error);
      }
    },
    paginaAnterior() {
      if (this.paginaActual > 1) {
        this.paginaActual--;
      }
    },
    paginaSiguiente() {
      if (this.paginaActual < this.totalPaginas) {
        this.paginaActual++;
      }
    },
    obtenerMantenimientos() {
      axios.get('http://localhost:4004/api/mantenimiento/mantenimientos')
        .then(response => {
          this.mantenimientos = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los mantenimientos:', error);
        });
    },
  },
  mounted() {
    this.obtenerMantenimientos();
  },
  components: {
    Breadcrumbs,
  },
};
</script>

<style scoped>
.mantenimiento {
  padding: 20px;
  margin: 10px;
}

.buscador {
  border-right: none;
  padding: 0.7%;
}

.icono-buscador {
  height: 100%;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.contenedor-buscador {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  border-radius: 9px;
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

.card {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}
</style>
