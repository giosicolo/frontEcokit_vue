<template>
  <div id="app">
    <MainMenu v-if="usuarioLogeado"></MainMenu>
    <div class="contenido">
    <Login v-if="!usuarioLogeado && $route.path === '/login'" />
    
      
    
    <!-- Muestra el contenido principal solo si el usuario está autenticado -->
    <router-view v-else-if="usuarioLogeado" />

    <!-- Redirige al usuario a la página de inicio de sesión si no está autenticado -->
    <Login v-else />
  </div>
    <Footer></Footer>
  </div>
</template>

<script>
import MainMenu from './components/generales/TheHeader.vue'
import Footer from './components/generales/TheFooter.vue'
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
  display: flex;
  background-color: #f2f2f2;
  min-height: 100vh;
  flex-direction: column;
}
#app > :last-child {
  margin-top: auto; /* Empuja el último elemento hacia abajo, ocupando todo el espacio restante */
}

body {
  font-family: 'Open Sans', sans-serif;
}
.contenido{
  margin-top: 60px;
}
</style>
