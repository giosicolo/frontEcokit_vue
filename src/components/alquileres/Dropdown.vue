<template>
    <div
      class="mouseover-dropdown-container"
      @mouseover="showDropdown"
      @mouseleave="hideDropdown"
    >
      <div v-if="isDropdownVisible" class="mouseover-dropdown-content">
        <!-- Contenido del desplegable -->
        <table>
          <thead>
            <tr>
              <th>Moneda</th>
              <th>Valor en Pesos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fila, indexFila) in filas" :key="indexFila">
              <td v-for="(columna, indexColumna) in fila" :key="indexColumna">
                {{ indexColumna === 1 ? `$${columna}` : columna }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
 import axios from "axios";
 export default {
    data() {
      return {
        isDropdownVisible: false,
        filas: [ 
          {moneda: 'Dólar', url: 'https://dolarapi.com/v1/dolares/oficial', valor: ''},
          {moneda:'Euro',url: 'https://dolarapi.com/v1/cotizaciones/eur', valor: '' },
          {moneda:'Blue',url: 'https://dolarapi.com/v1/dolares/blue' , valor: ''},
          {moneda:'Turista',url:'https://dolarapi.com/v1/dolares/tarjeta', valor: ''}],
      };
    },
    methods: {
    showDropdown() {
      this.isDropdownVisible = true;
      this.obtenerValorDolar(); 
      this.obtenerValores();


    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    async obtenerValorDolar() {
      try {
        const response = await axios.get('https://dolarapi.com/v1/dolares/oficial');
        this.valorDolar = `$${response.data.venta}`;
      } catch (error) {
        console.error('Error al obtener el valor del dólar:', error);
      }
    },
    async obtenerValores() {
        for (let i = 0; i < this.filas.length; i++) {
        const moneda = this.filas[i].moneda;
        const url = this.filas[i].url;

        try {
          const response = await axios.get(url);
          // Actualiza la propiedad 'valor' utilizando el método splice
          this.filas.splice(i, 1, { moneda, valor: response.data.venta });
        } catch (error) {
          console.error(`Error al obtener el valor de ${moneda}:`, error);
        }
      }
    },
  
}
  };
  </script>
  

  <style scoped>
  .mouseover-dropdown-container {
    position: fixed;
    top: 50%;
    left: 0;
    height: 25vh;
    width: 50px;
    background-color: #eee;
    transform: translateY(-50%);
  }
  
  .mouseover-dropdown-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-10%, -50%);
    width: 250px; /* Ajustado para que la tabla se expanda según el contenido */
    max-width: 400px; /* Limita el ancho máximo para evitar que la tabla sea demasiado ancha */
    height: 25vh;
    padding: 15px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: auto; /* Agregado para habilitar el desplazamiento vertical si es necesario */
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>