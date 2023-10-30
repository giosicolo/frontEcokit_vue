import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createApp } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue';
import router from './routers/router'; // Importa el archivo de configuración del enrutador


library.add(fas);
const app = createApp(App);
app.use(router); // Utiliza Vue Router en tu aplicación
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');