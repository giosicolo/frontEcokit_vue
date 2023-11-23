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
        <h3 class="mb-0">Listado de mantenimientos actuales</h3>
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
      <tr v-for="mantenimiento in paginatedMantenimientos" :key="mantenimiento.id">
            <td>{{ mantenimiento.fecha }}</td>
            <td>{{ mantenimiento.alquiler }}</td>
            <td>{{ mantenimiento.tipoMantenimiento }}</td>
            <td>{{ mantenimiento.planta }}</td>
            <td>{{ mantenimiento.usuario }}</td>
            <td>
              <button class="btn" @click="eliminar"><font-awesome-icon :icon="['fas', 'eye']" /></button>
              <button class="btn" @click="editar"><font-awesome-icon :icon="['fas', 'pen']" /></button>
              <button class="btn" @click="eliminar"><font-awesome-icon :icon="['fas', 'trash']" /></button>
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
import Breadcrumbs from '../generales/Breadcrumbs.vue';
export default {
  data() {
    return {
      filtro: '',
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
        },
        {
          id: 3,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento B',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },
        {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },
        {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },
        {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },
        {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },
        {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },
        {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },
        {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },
        {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        },

        // Ejemplos de datos
      ],
      elementosPorPagina: 7,
      paginaActual: 1,
    };
  },
  computed: {
    paginatedMantenimientos() {
      // Aplicar el filtro a los datos antes de paginar
      const filteredData = this.mantenimientos.filter(mantenimiento =>
        Object.values(mantenimiento).some(valor =>
          valor && valor.toString().toLowerCase().includes(this.filtro.toLowerCase().trim())
        )
      );

      // Calcula el índice de inicio y final para la paginación
      const startIndex = (this.paginaActual - 1) * this.elementosPorPagina;
      const endIndex = startIndex + this.elementosPorPagina;

      // Retorna los datos paginados y filtrados
      return filteredData.slice(startIndex, endIndex);
    },
    totalPaginas() {
      // Calcula el número total de páginas
      return Math.ceil(
        this.mantenimientos
          .filter(mantenimiento =>
            Object.values(mantenimiento).some(valor =>
              valor && valor.toString().toLowerCase().includes(this.filtro.toLowerCase().trim())
            )
          )
          .length / this.elementosPorPagina
      );
    },
  },
  methods: {
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
    // Resto de tus métodos existentes
  },
  components: {
    Breadcrumbs
  }
};
</script>
    
  
  
<style scoped>
/* Agrega estilos personalizados para esta vista  */
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
    