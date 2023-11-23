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
              <th>Monto</th> 
              <th>Conformidad</th>
              <th>Detalle</th>
              <th>Fecha</th>
              <th>Alquiler</th>
              <th>Cobro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="remito in paginatedRemito" :key="remito.id">
              <td>USD {{ remito.monto }}</td>
              <td>{{ remito.conformidad ? 'Sí' : 'No' }}</td>
              <td>{{ remito.detalle }}</td>
              <td>{{ remito.fecha }}</td>
              <td>Alquiler {{ remito.alquiler_id }}</td>
              
              <td> {{ remito.cobro_id }}</td>
              <td>
                <router-link :to="'/remitos/' + remito.remito_id">
                  <button class="btn" ><font-awesome-icon :icon="['fas', 'eye']" /></button>
                </router-link>

                <button class="btn" @click="editar"><font-awesome-icon :icon="['fas', 'pen']" /></button>
                <button class="btn" @click="eliminar(remito)"><font-awesome-icon :icon="['fas', 'trash']" /></button>
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
import nuevo_remito from './nuevo_remito.vue';
import axios from 'axios';

export default {
  data() {
    return {
      filtro: '',
      remitos: [],
      elementosPorPagina: 8,
      paginaActual: 1,
    };
  },
  computed: {
    paginatedRemito() {
      const filteredData = this.remitos.filter(remito =>
        Object.values(remito).some(valor =>
          valor && valor.toString().toLowerCase().includes(this.filtro.toLowerCase().trim())
        )
      );

      const startIndex = (this.paginaActual - 1) * this.elementosPorPagina;
      const endIndex = startIndex + this.elementosPorPagina;

      return filteredData.slice(startIndex, endIndex);
    },
    totalPaginas() {
      return Math.ceil(this.remitos.length / this.elementosPorPagina);
    },
  },
  components: {
    Breadcrumbs,
    nuevo_remito,
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
    ver() {
      // Lógica para ver el detalle del remito
    },
    editar() {
      // Lógica para editar el remito
    },
    eliminar(remito) {
      // Lógica para eliminar el remito

      //confirmacion
      if (!confirm('¿Está seguro que desea eliminar el remito?')) {
        return;
      }

      axios.delete(`http://localhost:4004/api/remito/${remito.remito_id}`);
      this.remitos = this.remitos.filter(r => r.remito_id !== remito.remito_id);


    },
  },
  created() {
    // Realiza la solicitud HTTP para obtener los remitos desde tu API local
    // Asume que la API está en http://localhost:3000/api/remitos
    fetch('http://localhost:4004/api/remito/all')
      .then(response => response.json())
      .then(data => {
        this.remitos = data.data;
        console.log('Remitos:', this.remitos);
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
