<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container">
      <router-link to="/" class=""><img src="src\assets\logoEcokitBlanco.png" alt="Logo" width="150" height="40"></router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mantenimiento" class="nav-link nav-link-active">Mantenimientos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/remitos" class="nav-link nav-link-active">Remitos</router-link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style scoped>
 .router-link-exact-active {
  background-color: #333; /* Cambia el color de fondo del enlace activo */
  color: #fff; /* Cambia el color del texto del enlace activo */
}
</style>
