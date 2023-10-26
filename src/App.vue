<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

//Aca probe importar una barrita de tareas basica para irme amigando con vue
import TheHeader from './components/TheHeader.vue';

</script>

<template>
   
  
  <header>
    <TheHeader />
    
    
  </header>

  <main>
    <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125" />
    <TheWelcome />
 
  </main>

</template>