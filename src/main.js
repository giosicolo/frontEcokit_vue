import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createApp } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue';
import router from './routers/router';
import store from './components/store'; // Importa tu store Vuex
import Vuex from 'vuex';


library.add(fas);

const app = createApp(App);
app.use(router);
app.use(Vuex);
app.use(store); // Utiliza Vuex en tu aplicación
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
