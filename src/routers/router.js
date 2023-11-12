import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MantenimientoLista from '../views/MantenimientoLista.vue' // Importa la vista Mantenimiento
import Remitos from '../views/remito/Remitos.vue' // Importa la vista Remitos
import nuevoRemito from '../components/remito/nuevo_remito.vue' // Importa la vista Remitos
import Alquileres from '../views/vista_alta_alquiler.vue'
import FormMantenimiento from '../components/FormMantenimiento.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/mantenimiento',
    name: 'MantenimientoLista',
    component: MantenimientoLista,
    meta: { breadcrumb: 'a' },
  }, 
  {
    path: '/mantenimiento/alta-mantenimiento',
    name: 'FormMantenimiento',
    component: FormMantenimiento,
    meta: { breadcrumb: 'mantenimiento/alta-mantenimiento' },
  },
  {
    path: '/remitos',
    name: 'Remitos',
    component: Remitos,
    meta: { breadcrumb: 'Remitos' }
  },
  {
    path: '/remitos/nuevo_remito',
    name: 'nuevoRemito',
    component: nuevoRemito,
    meta: { breadcrumb: 'Remitos/nuevo-remito' }
  },
  {
    path: '/alquileres',
    name: 'Alquileres',
    component: Alquileres,
    meta: { breadcrumb: 'Alquileres' },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
