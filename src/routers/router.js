import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Inicio.vue';
import MantenimientoLista from '../views/MantenimientoLista.vue' // Importa la vista Mantenimiento
import Remitos from '../views/Remitos.vue' // Importa la vista Remitos
import Alquileres from '../views/vista_alta_alquiler.vue'
import FormMantenimiento from '../components/mantenimientos/FormMantenimiento.vue'
import Login from '../views/Login.vue'
import store from '../components/store.js'
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
    meta: { breadcrumb: 'Remitos' },
  },
  {
    path: '/alquileres',
    name: 'Alquileres',
    component: Alquileres,
    meta: { breadcrumb: 'Alquileres' },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { breadcrumb: 'Login' },
    beforeEnter: (to, from, next) => {
      // Verifica si el usuario está logeado
      const usuarioLogeado = store.state.usuarioLogeado;
      if (usuarioLogeado) {
        // El usuario ya está logeado, redirige a la página principal
        next('/');
      } else {
        // El usuario no está logeado, permite el acceso a la página de inicio de sesión
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
