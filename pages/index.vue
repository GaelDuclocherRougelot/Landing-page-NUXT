<template>
  <div class="home">
    <div class="section1">
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

    <div id="section2" class="section2">
      <div class="gallery">
        <figure class="gallery__item gallery__item--1">
          <img src="~/assets/plagejpg.jpg" class="gallery__img" alt="Image 1" />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img
            src="~/assets/mountainsnow.jpg"
            class="gallery__img"
            alt="Image 3"
          />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src="~/assets/lac.jpg" class="gallery__img" alt="Image 4" />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src="~/assets/maldive.jpg" class="gallery__img" alt="Image 6" />
        </figure>
      </div>

      <div id="section3">
        <div class="top">
          <h1>Nos services</h1>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSmall: '',
    }
  },
  head() {
    return {
      titleTemplate: '%s - Acceuil',
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
a {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home {
  /* width: 100%;
  height: 100%; */
  display: flex;
  align-items: center;
  flex-direction: column;
}

.section1 {
  width: 100%;
  height: 100vh;
  background-image: url('~/assets/asia-min.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
}

.logo {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(-20deg)
  brightness(500%) contrast(200%);
}

.section2 {
  margin: 5px;
  width: 100%;
  height: 100%;
}

.gallery {
  margin: 10px;
}

.section2 > img {
  max-width: 100%;
  height: auto;
}

.gallery__item {
  height: auto;
  margin: 0.5rem;
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 640px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 240px);
    grid-auto-flow: row dense;
  }
  .gallery__item {
    margin: 0.7rem;
  }

  .gallery__item:first-child {
    grid-row: span 2;
  }
  .gallery__item:nth-child(2) {
    grid-column: 1;
    grid-row: span 2;
  }
  .gallery__item:nth-child(6),
  .gallery__item:nth-child(3) {
    grid-row: span 2;
  }

  .gallery__item:nth-child(4) {
    grid-row: span 2;
  }
}

#bg-img {
  position: absolute;
  width: 100px;
  bottom: 60px;
  cursor: pointer;
}

h1,h2,h3,button {
  font-family: 'Poppins', sans-serif;
}

button:hover{
  background-color: #db3f3f;
  transition: all 0.3s ease;
}

@media (max-width: 1500px) {
  #bg-img {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(-20deg)
      brightness(500%) contrast(200%);
  }
}

/* Section 3 services */

#section3 {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: whitesmoke; */
}

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
  font-family: 'Quicksand', sans-serif;
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

/* Section 4 join us */

#section4 {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#section4 > button {
  padding: 20px;
  font-size: 20px;
  border: none;
  background-color: rgb(75, 204, 255);
  border-radius: 50px;
  width: 300px;
  transition: all 1s ease;
}
#section4 > button:hover {
  transition: all 1s ease;
}
</style>