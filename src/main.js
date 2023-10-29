import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/router'; // Importa el archivo de configuración del enrutador

const app = createApp(App);
app.use(router); // Utiliza Vue Router en tu aplicación

app.mount('#app');