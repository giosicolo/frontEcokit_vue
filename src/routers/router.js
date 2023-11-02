import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MantenimientoLista from '../views/MantenimientoLista.vue' // Importa la vista Mantenimiento
import Remitos from '../views/Remitos.vue' // Importa la vista Remitos

const routes = [
  { path: '/', component: Home },
  {
    path: '/mantenimiento', // Ruta para la vista Mantenimiento
    name: 'MantenimientoLista',
    component: MantenimientoLista // Asocia la ruta con la vista Mantenimiento
  },
  {
    path: '/remitos', // Ruta para la vista Remitos
    name: 'Remitos',
    component: Remitos // Asocia la ruta con la vista Remitos
  }
  // Agrega aquí otras rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;