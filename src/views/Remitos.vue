<template>
    <div class="container">
      <div class="my-4">
        <button
          class="btn btn-primary"
          @click="mostrarNuevoRemitoForm = !mostrarNuevoRemitoForm; mostrarListarRemitos = false"
        >
          Nuevo Remito
        </button>
      </div>
  
      <div class="my-4">
        <button
          class="btn btn-primary"
          @click="mostrarListarRemitos = !mostrarListarRemitos; mostrarNuevoRemitoForm = false"
        >
          Ver Remitos
        </button>
      </div>
  
      <div v-if="mostrarNuevoRemitoForm">
        <!-- Contenido del componente de creación de remitos -->
        <nuevo-remito @remito-guardado="ocultarNuevoRemitoForm" />
      </div>
  
      <div v-if="mostrarListarRemitos">
        <!-- Contenido del componente para listar remitos -->
        <listar-remitos @listar-remitos="ocultarListarRemitos" />
      </div>
    </div>
  </template>
  
  <script>
  import nuevoRemito from '../components/nuevo_remito.vue';
  import listarRemitos from '../components/listar_remitos.vue';
  
  export default {
    components: {
      'nuevo-remito': nuevoRemito,
      'listar-remitos': listarRemitos,
    },
    data() {
      return {
        mostrarNuevoRemitoForm: false,
        mostrarListarRemitos: false,
      };
    },
    methods: {
      ocultarNuevoRemitoForm() {
        this.mostrarNuevoRemitoForm = false;
      },
      ocultarListarRemitos() {
        this.mostrarListarRemitos = false;
      },
    },
  };
  </script>
  