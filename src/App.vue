<template>
  <div id="app">
    <MainMenu v-if="usuarioLogeado" class="MainMenu"></MainMenu>
    <Login v-if="!usuarioLogeado" />
    <div v-if="usuarioLogeado" class="contenido">

      <div>
        <!-- Muestra el contenido principal solo si el usuario está autenticado -->
        <router-view v-if="usuarioLogeado" />
      </div>


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

#app> :last-child {
  margin-top: auto;
  /* Empuja el último elemento hacia abajo, ocupando todo el espacio restante */
}

body {
  font-family: 'Open Sans', sans-serif;
}

.contenido {
  margin-top: 60px;
}
.MainMenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Asegura que MainMenu tenga un z-index mayor */
}
</style>
