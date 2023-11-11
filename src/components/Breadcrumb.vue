<template>
  <nav class="breadcrumbs">
    <ul class="row">
      <li class="col-md-2" v-for="(crumb, index) in crumbs" :key="index">
        <router-link :to="crumb.to">{{ crumb.label }}</router-link>
        <span v-if="index < crumbs.length - 1"> -> </span> <!-- Agregar '->' entre las migas de pan -->
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      crumbs: []
    };
  },
  watch: {
    $route: "generateCrumbs"
  },
  created() {
    this.generateCrumbs();
  },
  methods: {
    generateCrumbs() {
      const matchedRoutes = this.$route.matched;

      this.crumbs = matchedRoutes.map(route => {
        return {
          to: route.path,
          label: route.meta.breadcrumb || route.name
        };
      });

      // Agregar un elemento para representar el "Nuevo Mantenimiento" si es una ruta de formulario de nuevo mantenimiento
      if (this.$route.name === 'NuevoMantenimiento') {
        this.crumbs.push({
          to: this.$route.path,
          label: 'Nuevo Mantenimiento'
        });
      }
    }
  }
};
</script>
