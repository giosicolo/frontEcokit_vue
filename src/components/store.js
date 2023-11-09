// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    usuarioLogeado: null,
  },
  mutations: {
    iniciarSesion(state, usuario) {
      state.usuarioLogeado = usuario;
    },
    cerrarSesion(state) {
      state.usuarioLogeado = null;
    },
  },
  actions: {
    // Puedes agregar acciones asíncronas aquí si es necesario
  },
  getters: {
    esUsuarioLogeado: state => {
      return state.usuarioLogeado !== null;
    },
  },
});
