<template>
    <nav aria-label="breadcrumb" class="m-3">
      <ol class="breadcrumb">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
          <router-link :to="crumb.route" :class="{ 'disabled-link': index === breadcrumbs.length - 1 }" v-if="index !== breadcrumbs.length - 1">
            {{ crumb.text }}
          </router-link>
          <span v-else>{{ crumb.text }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <style>
  .disabled-link {
    pointer-events: none; /* Desactiva los eventos del mouse en el enlace */
    color: #6c757d; /* Cambia el color para indicar que está desactivado */
    text-decoration: none; /* Puedes quitar la subrayado si lo prefieres */
    cursor: not-allowed; /* Cambia el cursor para indicar que no se puede hacer clic */
  }
  </style>
  
  <script>
  export default {
    computed: {
      breadcrumbs() {
        const routeSegments = this.$route.path.split('/').filter(segment => segment !== '');
  
        // Agregar el enlace a Inicio al principio del array
        const breadcrumbs = [
          { text: 'Inicio', route: '/' },
          ...routeSegments.map((segment, index) => {
            const routePath = `/${routeSegments.slice(0, index + 1).join('/')}`;
            return { text: segment, route: routePath };
          })
        ];
  
        return breadcrumbs;
      },
      currentPage() {
        return this.breadcrumbs.length > 0 ? this.breadcrumbs[this.breadcrumbs.length - 1].text : '';
      },
    },
  };
  </script>
  