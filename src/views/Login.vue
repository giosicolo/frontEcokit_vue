<!-- Login.vue -->
<template>
  <div class="col-md-3 hero-background text-center d-flex justify-content-center">

  </div>
</template>

<script>
export default {
  data() {
    return {
      credenciales: {
        usuario: '',
        contrasena: '',
      },
      usuarios: [
        { usuario: 'admin', contrasena: 'admin' },
        { usuario: 'usuario2', contrasena: 'contrasena2' },
        // Agrega más usuarios según sea necesario
      ],
    };
  },
  methods: {
    iniciarSesion() {
      const usuarioEncontrado = this.usuarios.find(user => user.usuario === this.credenciales.usuario && user.contrasena === this.credenciales.contrasena);

      if (usuarioEncontrado) {
        this.$store.commit('iniciarSesion', usuarioEncontrado); // Guarda el usuario en el estado global (Vuex)
        alert('Inicio de sesión exitoso');
        this.$router.push('/');
      } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    },
  },
};
</script>

<style scoped>
.hero-background {
  background-image: url('../assets/BackGround.png');
  /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 65%;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  /* Color de texto en el fondo */
  display: flex;
}
</style>