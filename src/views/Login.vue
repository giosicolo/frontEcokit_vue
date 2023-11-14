<!-- Login.vue -->
<template>
  <div class="row">
    <div class="col-md-8 hero-background">
      <img src="@/assets/icon-ecokit.png" alt="Icono Ecokit" class="img-fluid col-md-2" />
    </div>

    <div class="col-md-4 d-flex align-items-center justify-content-center">
      <form @submit.prevent="iniciarSesion" class="col-md-11">
        <div class="user-icon-container col-md-2 text-center flex-column">
          <font-awesome-icon :icon="['fas', 'user']" size="3x" />
        </div>

        <div class="col-md-12">
          <label for="usuario" class="form-label">Usuario:</label>
          <input v-model="credenciales.usuario" type="text" class="form-control" id="usuario"
            aria-describedby="usuarioAyuda" required>
          <div id="usuarioAyuda" class="form-text">Sus credenciales están seguras</div>
        </div>

        <div class="mb-3">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input v-model="credenciales.contrasena" type="password" class="form-control" id="contrasena" required>
        </div>

        <button type="submit" class="btn btn-primary">Entrar</button>
        <div v-if="alerta" class="alert alert-danger m-1" role="alert">
        {{ alerta }}
      </div>
      </form>
    </div>



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
      alerta: '', // Variable para almacenar el mensaje de alerta
    };
  },
  methods: {
    iniciarSesion() {
      const usuarioEncontrado = this.usuarios.find(
        (user) => user.usuario === this.credenciales.usuario && user.contrasena === this.credenciales.contrasena
      );

      if (usuarioEncontrado) {
        this.$store.commit('iniciarSesion', usuarioEncontrado);
        this.alerta = ''; // Reinicia la alerta
        this.$router.push('/');
      } else {
        this.alerta = 'Credenciales incorrectas. Inténtalo de nuevo.';
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
  height: 92vh;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  /* Color de texto en el fondo */
  display: flex;
}

.user-icon-container {
  background-color: rgba(107, 107, 107, 0.219);
  /* Ajusta el valor alpha (cuarto valor) para cambiar la transparencia */
  border-radius: 100%;
  padding: 20px;
  margin-left: 40%;
  /* Hace que el fondo sea circular */
  /* Ajusta según sea necesario */
}
</style>