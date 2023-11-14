<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container">
      <router-link to="/" class=""><img src="src\assets\logoEcokitBlanco.png" alt="Logo" width="150"
          height="40"></router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mantenimiento" class="nav-link nav-link-active">Mantenimientos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/alquileres" class="nav-link nav-link-active">Alquileres</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/remitos" class="nav-link nav-link-active">Remitos</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="d-flex align-items-right">
            <!-- Agregar enlace para cerrar sesión si está logeado -->
            <li v-if="usuarioLogeado" class="nav-item m-2">
              <button @click="cerrarSesion" class="nav-link m-2" style="color: aliceblue;">Cerrar Sesión</button>
            </li>
            <div class="col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <font-awesome-icon :icon="['fas', 'user']"  class="icon"/>
            <li v-if="usuarioLogeado" class="nav-item m-1">
              <router-link to="/" class="nav-link m-2" style="color: aliceblue;">{{ usuarioLogeado.usuario }}</router-link>
            </li>
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
</style>
