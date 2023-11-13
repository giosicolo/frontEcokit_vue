<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-12 hero-background text-center d-flex justify-content-center">
        <div class="bienvenido">
          <h1>¡Bienvenidos!</h1>
          <p>Somos especialistas en plantas de tratamiento de aguas efluentes, mediante la utilización de OZONO (O3).</p>
        </div>
      </div>
      
    </div>
    <div class="row mt-4">
      <div class="col-md-12 my-5">
        <div class="text-center bg-light p-4">
          <h2>QUIÉNES SOMOS</h2>
          <h3>SOMOS LÍDERES EN TRATAMIENTO DE AGUAS</h3>
          <p>Somos una empresa argentina líder en el mercado de saneamiento ambiental, especializada en el tratamiento de aguas y efluentes para hogares, con especial foco en Petróleo y Gas.</p>
        </div>
      </div>
      <div class="col-md-6 my-5">
        <div class="text-center bg-light">
          <h2>MISIÓN</h2>
          <p>Ser líderes en saneamiento ambiental, brindando soluciones que contribuyan al medio ambiente. Ser referentes en fabricación y servicio en la Patagonia.</p>
        </div>
      </div>
      <div class="col-md-6 my-5">
        <div class="text-center bg-light ">
          <h2>VISIÓN</h2>
          <p>Somos una empresa neuquina de fabricación y servicios dedicada a brindar soluciones a medida para el saneamiento ambiental y el cuidado del medio ambiente. Nuestro sistema está basado en tecnología propia con ozono.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-background {
  background-image: url('../assets/BackGround.png'); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #ffffff; /* Color de texto en el fondo */
  display: flex;
}
.bienvenido {
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}
/* Otras clases de estilo que necesites */
</style>