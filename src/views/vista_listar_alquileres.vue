<template>
  <div class="mantenimiento">
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h1 class="mb-0">Alquileres</h1>
        <button class="btn btn-primary"  @click="cambiarANuevoAlquiler" >
          <font-awesome-icon icon="plus" /> Nuevo
        </button>
      </div>
      <table class="table table-striped">
        <thead class="table">
          <tr>
            <th>Fecha</th>
            <th>Alquiler</th>
            <th>Mantenimiento</th>
            <th>Planta</th>
            <th>Usuario</th>
            <th>Acciones</th> <!-- Columna de acciones -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="mantenimiento in mantenimientos" :key="mantenimiento.id">
            <td>{{ mantenimiento.fecha }}</td>
            <td>{{ mantenimiento.alquiler }}</td>
            <td>{{ mantenimiento.tipoMantenimiento }}</td>
            <td>{{ mantenimiento.planta }}</td>
            <td>{{ mantenimiento.usuario }}</td>
            <td>
              <div class="dropdown">
                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'ellipsis-h']" style="color: black;" />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#"> <font-awesome-icon :icon="['fas', 'pen']"
                        style="color: black;" /> Editar</a></li>
                  <li><a class="dropdown-item" href="#"> <font-awesome-icon :icon="['fas', 'trash']"
                        style="color: black;" /> Eliminar</a></li>
                </ul>
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


  
<script>
import Form from '../FormMantenimiento.vue'
export default {
  data() {
    return {
      mantenimientos: [
        {
          id: 1,
          fecha: '2023-10-01',
          alquiler: 'Alquiler 1',
          tipoMantenimiento: 'Alquiker A',
          planta: 'Planta 1',
          usuario: 'Usuario 1',
        },
        {
          id: 2,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 2',
          tipoMantenimiento: 'Mantenimiento B',
          planta: 'Planta 2',
          usuario: 'Usuario 2',
        }, {
          id: 3,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento B',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        }, {
          id: 4,
          fecha: '2023-10-02',
          alquiler: 'Alquiler 3',
          tipoMantenimiento: 'Mantenimiento C',
          planta: 'Planta 3',
          usuario: 'Usuario 3',
        }
        // Ejemplos de datos
      ],

      nuevoAlquiler:true
    };
  }, components: {
    Form, // Registra el componente para su uso en esta vista
  }, methods:{
    cambiarANuevoAlquiler() {
      this.nuevoAlquiler= !this.nuevoAlquiler;
      console.log("Prueba" + this.nuevoAlquiler);

    }
  }
};
</script>
  


<style scoped>
/* Agrega estilos personalizados para esta vista  */
.mantenimiento {
  padding: 20px;
  margin: 10px;

}
</style>
  

