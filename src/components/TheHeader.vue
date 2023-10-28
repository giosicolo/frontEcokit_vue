<template>
  <nav class="navbar navbar-light navbar-expand-lg" style="background-color: #95f5b6;">
    <div class="container">
      <router-link to="/" class="navbar-brand"><img src="src\assets\logoEcokit.png" alt="Logo" width="150" height="40"></router-link>

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
            <router-link to="/mantenimiento" class="nav-link">Mantenimientos</router-link>
          </li>

          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Matenimientos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><router-link to="/mantenimiento" class="nav-link">Nuevo Mantenimientos</router-link></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

          <li class="nav-item">
            <router-link to="/remitos" class="nav-link">Remitos</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/pagina2" class="nav-link">Página 2</router-link>
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

</style>
