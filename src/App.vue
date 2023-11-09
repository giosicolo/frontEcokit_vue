<template>
  <div id="app">
    <MainMenu v-if="usuarioLogeado"></MainMenu>
    <!-- Muestra siempre la página de inicio de sesión -->
    <router-view v-if="!usuarioLogeado && $route.path === '/login'" />
    <!-- Muestra el contenido principal solo si el usuario está autenticado -->
    <router-view v-else-if="usuarioLogeado" />
    <!-- Redirige al usuario a la página de inicio de sesión si no está autenticado -->
    <Login></Login>
    <Footer v-if="usuarioLogeado"></Footer>
  </div>
</template>

<script>
import MainMenu from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'
import Login from './views/Login.vue'; 
export default {
  name: 'App',
  components: {
    MainMenu,
    Footer,
    Login,
  },
  computed: {
    usuarioLogeado() {
      return this.$store.state.usuarioLogeado;
    },
  },
};
</script>

<style>
#app {
  background-color: #f8f9fa;
  min-height: 93vh;
  flex-direction: column;
}

body {
  font-family: 'Open Sans', sans-serif;
}
</style>
