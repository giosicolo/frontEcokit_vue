<template>
  <div id="app">
    <MainMenu></MainMenu>
    <router-view /> <!-- Esta etiqueta muestra la vista correspondiente según la URL -->
  </div>
</template>

<script>
import MainMenu from './components/TheHeader.vue'
export default {
  name: 'App',
  components:{
    MainMenu
  }
}
</script>