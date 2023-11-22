<template>
  <div class="container-fluid">
    <!-- Sección Bienvenidos -->
    <div class="row justify-content-center">
      <div class="col-md-12 hero-background text-center d-flex justify-content-center">
        <div class="bienvenido">
          <h1>¡Bienvenidos!</h1>
          <p>Somos especialistas en plantas de tratamiento de aguas efluentes, mediante la utilización de OZONO (O3).</p>
        </div>
      </div>
    </div>

    <!-- Sección Quiénes Somos -->
    <div class="row mt-4 justify-content-center" id="quienes-somos">
      <div class="col-md-12 my-5">
        <div class="text-center p-4 mt-4 mb-4">
          <h2>QUIÉNES SOMOS</h2>
          <h3>SOMOS LÍDERES EN TRATAMIENTO DE AGUAS</h3>
          <p>Somos una empresa argentina líder en el mercado de saneamiento ambiental, especializada en el tratamiento de
            aguas y efluentes para hogares, con especial foco en Petróleo y Gas.</p>

          <div class="row justify-content-center">
            <div class="col-lg-2 col-md-6 col-sm-6 my-5">
              <div class="custom text-center bg-light">
                <font-awesome-icon icon="gears" class="fa-3x p-2" />
                <h2 class="pt-2">Servicio/Calidad</h2>
                <p>Brindamos servicio en todos los yacimientos de la cuenca</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 my-5">
              <div class="custom text-center bg-light">
                <font-awesome-icon icon="truck-front" class="fa-3x p-2" />
                <h2 class="pt-2">Transporte propio</h2>
                <p>Contamos con flota equipada para el servicio</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 my-5">
              <div class="custom text-center bg-light">
                <font-awesome-icon icon="user-tie" class="fa-3x p-2" />
                <h2 class="pt-2">Profesionales</h2>
                <p>Personal capacitado en el gremio petrolero.</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 my-5">
              <div class="custom text-center bg-light">
                <font-awesome-icon icon="tower-observation" class="fa-3x p-2" />
                <h2 class="pt-2">Nuestra base</h2>
                <p>Base operativa propia en Neuquén y en Añelo.</p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 my-5">
              <div class="custom text-center bg-light">
                <h2 class="pt-2">MISIÓN</h2>
                <p class="mb-5">Ser líderes en saneamiento ambiental, brindando soluciones que contribuyan al medio ambiente. Ser
                  referentes en fabricación y servicio en la Patagonia.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 my-5">
              <div class="custom text-center bg-light ">
                <h2 class="pt-2">VISIÓN</h2>
                <p class="mb-4">Somos una empresa neuquina de fabricación y servicios dedicada a brindar soluciones a medida para el
                  saneamiento ambiental y el cuidado del medio ambiente. Nuestro sistema está basado en tecnología propia
                  con
                  ozono.</p>
              </div>
            </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-background {
  background-image: url('../assets/BackGround.png');
  /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  /* Color de texto en el fondo */
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
.custom {
  border: 0.5px solid #d2d2d2;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>