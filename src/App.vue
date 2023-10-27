<template>
  <div id="app">
    <MainMenu></MainMenu>
    <router-view /> <!-- Esta etiqueta muestra la vista correspondiente según la URL -->
  </div>
  <div>
    <Footer></Footer>
  </div>
</template>

<script>
import MainMenu from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'
export default {
  name: 'App',
  components:{
    MainMenu,
    Footer
  }
}
</script>

<style>
  #app {
  background-color: #f8f9fa; /* Cambia el color de fondo según tus preferencias */
  /* Otros estilos para tu contenedor principal */
}
</style>