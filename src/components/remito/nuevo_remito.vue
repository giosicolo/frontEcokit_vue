<template>
  <div>
    <Breadcrumbs></Breadcrumbs>
    <div class="row m-5">
      <h1>Alta nuevo Remito</h1>
      <div class="card p-0">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h3 class="p-0 text-center">
            <font-awesome-icon icon="file" />
            Datos Remito
          </h3>
        </div>
        <div class="card-body">
          <form v-if="!previsualizar" @submit.prevent="submitForm"
            class="my-5 d-flex justify-content-center align-items-center">
            <div class="col-md-6">

              <div class="row mb-3">
                <label for="alquiler_id" class="col-sm-4 col-form-label">Alquiler en referencia:</label>
                <div class="col-sm-8">
                  <select v-model="nuevoRemito.alquiler_id" class="form-control" required>
                    <option v-for="alquiler in alquileresDisponibles" :key="alquiler.alquiler_id"
                      :value="alquiler.alquiler_id">
                      {{ alquiler.fecha_inicio }} - {{ alquiler.monto_base }} $
                    </option>
                  </select>
                </div>
              </div>


              <div class="row mb-3">
                <label for="fecha" class="col-sm-4 col-form-label">Fecha del Remito:</label>
                <div class="col-sm-8">
                  <input type="date" id="fecha" v-model="nuevoRemito.fecha" class="form-control" required>
                </div>
              </div>


              <div class="row mb-3">
                <label for="monto" class="col-sm-4 col-form-label">Monto en $:</label>
                <div class="col-sm-8">
                  <input type="number" id="monto" v-model="nuevoRemito.monto" class="form-control" required>
                </div>
              </div>



              <div class="form-group form-check">
                <input type="checkbox" id="conformidad" class="form-check-input" v-model="nuevoRemito.conformidad">
                <label class="form-check-label" for="conformidad">Existe Conformidad</label>
              </div>



              <div class="form-group">
                <label for="detalle">Detalles del Remito:</label>
                <input type="text" id="detalle" v-model="nuevoRemito.detalle" class="form-control" required>
              </div>

              <div class="mt-2 d-flex justify-content-between">
                <router-link to="/remitos" class="btn btn-secondary">Cancelar</router-link>
                <button @click="mostrarPrevisualizacion" type="submit" class="btn btn-primary">Previsualizar</button>
              </div>
            </div>
          </form>

                  <!-- Vista de previsualización -->
          <div v-if="previsualizar">
            <div class="remito-preview">
              <h3 class="mb-4">Previsualización de Remito</h3>
              <div class="row">
                <div class="col-md-6">
                  <p class="mb-2"><strong>Alquiler en referencia:</strong> {{ alquilerSeleccionado.fecha_inicio }} - {{ alquilerSeleccionado.monto_base }} $</p>
                  <p class="mb-2"><strong>Fecha del Remito:</strong> {{ nuevoRemito.fecha }}</p>
                  <p class="mb-2"><strong>Monto en $:</strong> {{ nuevoRemito.monto }}</p>
                  <p class="mb-2"><strong>Existe Conformidad:</strong> {{ nuevoRemito.conformidad ? 'Sí' : 'No' }}</p>
                </div>
                <div class="col-md-6">
                  <qrcode-vue :value="generarTextoQR()" />
                </div>
              </div>
              <p class="mb-4"><strong>Detalles del Remito:</strong> {{ nuevoRemito.detalle }}</p>

              <div class="mt-2 d-flex justify-content-between">
                <button type="button" class="btn btn-secondary" @click="ocultarPrevisualizacion">Editar</button>
                <button type="button" class="btn btn-primary" @click="guardarRemito">Guardar</button>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../generales/Breadcrumbs.vue';
import QrcodeVue from 'qrcode.vue';


export default {
  data() {
    return {
      nuevoRemito: {
        monto: null,
        conformidad: false,
        detalle: "",
        fecha: null,
        alquiler_id: null,
        cobro_id: null,
      },
      alquileresDisponibles: [],
      previsualizar: false,
      alquilerSeleccionado: null,
    };
  },
  components: {
    Breadcrumbs,
    QrcodeVue,
  },
  methods: {
    submitForm() {
      console.log("Datos del nuevo remito:", this.nuevoRemito);

      fetch('http://localhost:4004/api/remito/registrar_remito', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.nuevoRemito),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta de la API:', data);

        })
        .catch(error => console.error('Error al enviar el remito:', error));
    },
    mostrarPrevisualizacion() {
      this.previsualizar = true;
      // Obtener los detalles del alquiler seleccionado para mostrar en la previsualización
      this.alquilerSeleccionado = this.alquileresDisponibles.find(alquiler => alquiler.alquiler_id === this.nuevoRemito.alquiler_id);
    },
    ocultarPrevisualizacion() {
      this.previsualizar = false;
    },
    guardarRemito() {
      console.log("Datos del nuevo remito:", this.nuevoRemito);

      fetch('http://localhost:4004/api/remito/registrar_remito', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.nuevoRemito),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta de la API:', data);


          if (data && data.data && data.data.remito_id) {
            const remitoId = data.data.remito_id;
            alert(`El remito se creó correctamente con el ID: ${remitoId}`);
            setTimeout(() => {
              this.$router.push('/remitos');
            }, 1000);
          } else {
            alert('Hubo un problema al crear el remito');
            // Otra lógica si la creación del remito falla
          }

        })
        .catch(error => console.error('Error al enviar el remito:', error)); this.ocultarPrevisualizacion();
    },
    generarTextoQR() {
      return `Fecha: ${this.nuevoRemito.fecha}, Monto: ${this.nuevoRemito.monto}, Detalles: ${this.nuevoRemito.detalle}`;
    },
  },

  created() {
    // Obtener alquileres disponibles
    fetch('http://localhost:4004/api/remito/registrar_remito/get_alquileres_vigentes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {

        this.alquileresDisponibles = data.data;
        console.log('Alquileres disponibles:', this.alquileresDisponibles);
      })
      .catch(error => console.error('Error al obtener alquileres:', error));


  },


};
</script>

<style scoped>
/* Agrega estilos personalizados para esta vista */
.container {
  padding: 20px;
  margin-top: 10px;
}
.remito-preview {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.remito-preview img {
  max-width: 100%;
  height: auto;
}


</style>
