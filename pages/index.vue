<template>
  <div class="home">
    <div class="section1">
      <img class="backgrounds z-0 absolute object-cover w-full h-screen" src="~/assets/asia-min.jpg" alt="">
      <img class="logo w-14 absolute top-8 left-6" src="~/assets/logo-agence-voyage.png" alt="" />
      <router-link to="/contact" class="absolute top-8 right-6 hidden lg:block">
        <button class="text-lg text-white bg-red-500 pl-5 pr-5 pt-3 pb-3 rounded-lg w-full flex ease duration-75">
          <img class="mr-1" src="https://img.icons8.com/external-prettycons-flat-prettycons/30/000000/external-send-social-media-prettycons-flat-prettycons.png"/>
          Réserver
        </button>
      </router-link>
      <div class="title w-full flex flex-col text-center lg:justify-start lg:items-start lg:text-left lg:ml-52">
        <h1 class="text-white text-5xl lg:text-5xl 2xl:text-6xl font-normal tracking-tighter leading-snug">
          Voyager n'a jamais été aussi simple avec
        <h2 class="text-white font-light text-4xl lg:text-6xl 2xl:text-8xl mt-3">Travel&Co</h2>
        </h1>
        <h3 class="text-white font-extralight mt-3 lg-text-3x2 2xl:text-2xl">
          Nos experts et agents de voyages peut vous offrir une expérience de
          voyage inoubliable <br />
          en tenant compte de tous vos souhaits et besoins.
        </h3>
        <button class="text-lg text-white bg-red-500 pl-5 pr-5 pt-3 pb-3 rounded-lg flex ease duration-75 mt-40 lg:hidden w-40 self-center">
          <img class="mr-1" src="https://img.icons8.com/external-prettycons-flat-prettycons/30/000000/external-send-social-media-prettycons-flat-prettycons.png"/>
          Réserver
        </button>
      </div>
    </div>

      <div id="section3">
        <div class="top">
          <h1 class="text-3xl">Nos voyages</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            aperiam! Commodi itaque necessitatibus autem asperiores! Minus natus
            dicta modi. Eius.
          </p>
          <div id="separator"></div>
        </div>
        <div class="bottom">
          <div class="card">
            <img src="~/assets/work.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              beatae.
            </p>
          </div>
          <div class="card">
            <img src="~/assets/work.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laboriosam possimus debitis veritatis consectetur
              facilis!
            </p>
          </div>
          <div class="card">
            <img src="~/assets/work.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              beatae.
            </p>
          </div>
          
        </div>
      </div>
    </div> 
</template>

<script>
export default {
  data() {
    return {

    }
  },
  head() {
    return {
      titleTemplate: '%s - Acceuil',
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');

$primaryFont: "Poppins", sans-serif;
$secondaryFont: "Quicksand", sans-serif;

.home {
  width: 100%;
  height: 100%; 
  display: flex;
  align-items: center;
  flex-direction: column;

  .vueperslide {
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);

  &__title {
    font-size: 7em;
    opacity: 0.6;
  }
}


  a {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  .section1 {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  .title{
    position: relative;
    z-index: 2;
  }

  .logo {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(-20deg)
  brightness(500%) contrast(200%);
}
}

#section3 {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: whitesmoke; */
.top {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 500px;
  height: 25%;
  margin-top: 40px;
}

p {
  margin-top: 10px;
  font-family: $secondaryFont;
  font-size: 18px;
  text-align: center;
}

#separator {
  width: 200px;
  height: 2px;
  background-color: rgb(0, 162, 255);
  margin-top: 20px;
  margin-bottom: 20px;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.card {
  width: 500px;
  height: 500px;
  margin: 20px;
}

.card > img {
  padding: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 860px) {
  .bottom {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 400px);
    grid-auto-flow: row dense;
  }
  .card {
    width: 350px;
    margin: 0 auto;
    height: 100%;
  }
  .card > img {
    height: 70%;
  }
  .top {
    width: 375px;
  }
  #section3 {
    height: 100%;
  }
}

}

}


h1,h2,h3,button {
  font-family: $primaryFont;
}

button:hover{
  background-color: #db3f3f;
  transition: all 0.3s ease;
}

/* Section 3 prices */





</style>