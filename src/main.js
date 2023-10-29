<<<<<<< HEAD
import './assets/bootstrap.min.css'
import './assets/bootstrap.bundle.min.js'
=======
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/router'; // Importa el archivo de configuración del enrutador
>>>>>>> 70625519e605f7456cd2c112165cfc768f18a82d

const app = createApp(App);
app.use(router); // Utiliza Vue Router en tu aplicación

app.mount('#app');