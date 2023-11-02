<script>
import form_alta_alquiler from '../components/alquileres/form_alta_alquiler.vue'
//import listar_alquileres from '../components/alquileres/listar_alquileres.vue'
export default {
  name: 'vista_alquiler',
  components:{
    //listar_alquileres,
    form_alta_alquiler
  } ,
   data() {
    return {
    }
  },
  props: ['nuevoAlquiler']
}
</script>

<template>
   
   
   <h1 class="text-center">Alta Nuevo Alquiler</h1>
  
    <form_alta_alquiler></form_alta_alquiler> 

  </template>
  
    
