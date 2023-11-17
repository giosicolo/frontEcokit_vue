<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="src\assets\logoEcokitBlanco.png" alt="Logo" width="150" height="40">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mantenimiento" class="nav-link">Mantenimientos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/alquileres" class="nav-link">Alquileres</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/remitos" class="nav-link">Remitos</router-link>
          </li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <div v-if="usuarioLogeado" class="nav-item">
          <button @click="cerrarSesion" class="btn btn-link text-white">Cerrar Sesión</button>
        </div>

        <div v-if="usuarioLogeado" class="nav-item">
          <router-link to="/" class="nav-link" style="color: aliceblue;">{{ usuarioLogeado.usuario }}</router-link>
        </div>

        <div class="nav-item">
          <font-awesome-icon :icon="['fas', 'user']" class="text-white p-2" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    usuarioLogeado() {
      return this.$store.state.usuarioLogeado;
    },
  },
  methods: {
    cerrarSesion() {
      // Llama a la mutación de cerrar sesión en el store
      this.$store.commit('cerrarSesion');
      // Puedes redirigir a la página de inicio o a donde prefieras después de cerrar sesión
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
.router-link-exact-active {
  background-color: #333;
  /* Cambia el color de fondo del enlace activo */
  color: #fff;
  /* Cambia el color del texto del enlace activo */
}
.icon{
  color: #fff;
}
.navbar {
  position: fixed;
  width: 100%; /* Ajusta el valor si hay superposición con otros elementos */
}
</style>
