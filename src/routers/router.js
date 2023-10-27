import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MantenimientoLista from '../views/MantenimientoLista.vue' // Importa la vista Mantenimiento
const routes = [
  { path: '/', component: Home },
  {
    path: '/mantenimiento', // Ruta para la vista Mantenimiento
    name: 'MantenimientoLista',
    component: MantenimientoLista // Asocia la ruta con la vista Mantenimiento
  }
  // Agrega aquí otras rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
