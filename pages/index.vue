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
          <div v-for="(card, index) in cards" :key="index" class="card">
            <span v-if="card.new" class="absolute text-white bg-green-500 p-2 ml-3 mt-3 rounded">Nouveau</span>
            <span v-if="card.discount.isActive" class="absolute text-white bg-yellow-500 p-2 ml-3 mt-3 rounded">Réduction</span>
            <img :src="card.img" alt="product image" />
            <div class="star-ratings-css" :title="card.rate"></div>
            <h1 class="text-center mt-3">{{card.name}}</h1>

            <div class="flex w-full justify-center items-center">
              <span v-if="card.discount.isActive" class="mt-1 mr-3 line-through">{{card.discount.price}}</span>
            <h2 class="text-center mt-1 font-semibold">{{card.price}}</h2>
            </div>
            <p>{{card.desc}}</p>
          </div>

        </div>
      </div>
    </div> 
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          img: '/_nuxt/assets/asia-min.jpg',
          price: '1300€',
          name: 'Singapour',
          desc: 'Voyage a Singapour',
          rate: '.875',
          new: true,
          discount: {
            isActive: false,
            price: '4500€',
          }
        },
        {
          img: '/_nuxt/assets/asia-min.jpg',
          price: '3500€',
          name: 'Singapour',
          desc: 'Voyage a Singapour',
          rate: '.500',
          new: false,
          discount: {
            isActive: true,
            price: '4500€',
          }
        },
        {
          img: '/_nuxt/assets/asia-min.jpg',
          price: '1300€',
          name: 'Singapour',
          desc: 'Voyage a Singapour',
          rate: '.500',
          new: false,
          discount: {
            isActive: false,
            price: '4500€',
          }
        },
      ]
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
  background-color: whitesmoke; 
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
  margin-top: 5px;
  font-family: $secondaryFont;
  font-size: 16px;
  text-align: center;
}

span {
  font-family: $primaryFont;
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
  height: 700px;
  margin: 20px;
  background-color: #fff;
  border-radius: 15px;
  -webkit-box-shadow: 12px 7px 12px -2px rgba(0,0,0,0.42);
-moz-box-shadow: 12px 7px 12px -2px rgba(0,0,0,0.42);
box-shadow: 12px 7px 12px -2px rgba(0,0,0,0.42);
}

.card > img {
  border-radius: 15px 15px 0px 0px;
  width: 100%;
  height: 75%;
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


.star-ratings-css {
  unicode-bidi: bidi-override;
  font-size: 25px;
  height: 25px;
  width: 100px;
  margin: 0 auto;
  position: relative;
} 
.star-ratings-css::before { 
  content: '★★★★★';
  opacity: .3;
}

[title=".000"]::after {
  width: 0%;
}
[title=".125"]::after {
  width: 12.5%;
}
[title=".250"]::after {
  width: 25%;
}
[title=".375"]::after {
  width: 37.5%;
}
[title=".500"]::after {
  width: 50%;
}
[title=".625"]::after {
  width: 62.5%;
}
[title=".720"]::after {
  width: 72%;
}
[title=".875"]::after {
  width: 87.5%;
}
.star-ratings-css::after {
  color: gold;
  content: '★★★★★';
  position: absolute;
  z-index: 1;
  display: block;
  left: 0;
  top:0;
  width: attr(rating);
  overflow: hidden;
}
</style>