<template>
  <div class="home">
    <div class="section1 relative">
      <img class="backgrounds z-0 absolute object-cover w-full h-screen" src="~/assets/jpgs/asia-min.jpg" alt="background">
      <img class="logo w-14 absolute top-8 left-6" src="~/assets/pngs/logo-agence-voyage.png" alt="logo" />
        <button class="absolute top-8 right-6 sm:hidden lg:flex text-lg text-white bg-red-500 pl-5 pr-5 pt-3 pb-3 rounded-lg flex ease duration-75">
          <img class="mr-1" src="https://img.icons8.com/external-prettycons-flat-prettycons/30/000000/external-send-social-media-prettycons-flat-prettycons.png"/>
          Réserver
        </button>
      <div class="text-anim title w-full flex flex-col text-center lg:justify-start lg:items-start lg:text-left lg:ml-52">
        <h1 v-parallax="-0.2" class="anim text-white text-5xl lg:text-5xl 2xl:text-6xl font-normal tracking-tighter leading-snug">                     
          Voyager n'a jamais été aussi simple avec
        <h2 class="text-anim text-white font-light text-4xl lg:text-6xl 2xl:text-8xl mt-3">Travel&Co</h2>
        </h1>
        <h3 v-parallax="-0.1" class="text-anim text-white font-extralight mt-3 lg-text-3x2 2xl:text-2xl">
          Nos experts et agents de voyages peut vous offrir une expérience de
          voyage inoubliable <br />
          en tenant compte de tous vos souhaits et besoins.
        </h3>
        <button class="text-lg text-white bg-red-500 px-5 py-3 rounded-lg flex ease duration-75 mt-40 lg:hidden w-40 self-center">
          <img class="mr-1" src="https://img.icons8.com/external-prettycons-flat-prettycons/30/000000/external-send-social-media-prettycons-flat-prettycons.png"/>
          Réserver
        </button>
      </div>
    </div>

      <div id="section3" class="lg:pb-24 sm:pb-6">
        <div class="section3-top">
          <h1 class="text-3xl text-gray-700 font-extrabold">Nos voyages du moment</h1>
          <p class="px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            aperiam! Commodi itaque necessitatibus autem asperiores! Minus natus
            dicta modi. Eius.
          </p>
          <div id="section3-separator"></div>
        </div>
        <div class="section3-bottom sm:grid-cols-1 sm:grid-rows-3 sm:grid-flow-row-dense">
          <div v-for="(card, index) in cards" :key="index" class="section3-card">
            <span v-if="card.new" class="absolute text-white bg-green-500 p-2 ml-3 mt-3 rounded">Nouveau</span>
            <span v-if="card.discount.isActive" class="absolute text-white bg-yellow-500 p-2 ml-3 mt-3 rounded">Réduction</span>
            <img :src="require(`~/assets/jpgs/${card.img}.jpg`)" alt="product image" />
            <div class="star-ratings-css" :title="card.rate"></div>
            <h1 class="text-center mt-3 cursor-pointer text-lg">{{card.name}}</h1>
            <p class="-mt-2">{{card.desc}}</p>
            <div class="flex w-full justify-center items-center mt-3">
              <span v-if="card.discount.isActive" class="mt-1 mr-3 line-through text-sm">{{card.discount.price}}</span>
              <h2 class="text-center mt-1 font-semibold">{{card.price}}</h2>
            </div>
          </div>

        </div>
      </div>

      <div class="section4 w-full sm:h-full lg:h-screen flex flex-col relative">
        <div class="section4-top w-full lg:h-3/6 sm:h-full sm:flex-col lg:flex-row z-6 bg-white relative">
          <h1 class="text-center mt-10 text-4xl text-gray-700 font-extrabold">Pourquoi choisir Travel&Co ?</h1>

          <div class="w-full lg:h-96 flex justify-around items-center sm:flex-col lg:flex-row 2xl:mt-12">
            <div  v-for="(service, index) in services" :key="index" class="service lg:w-96 sm:w-full h-80 m-5 flex flex-col items-center px-3 ">
              <img class="w-32 mt-8 transition-all duration-300 ease" :class="{svg : index <= 2, 'animate-spin-slow' : index == 2}" :src="require(`~/assets/svgs/${service.img}.svg`)" :alt="service.img +' photo'">
              <h1 class="text-center mt-10 text-2xl text-gray-700 font-extrabold">{{service.title}}</h1>
              <p class="text-center mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque tempora, error ratione vel porro obcaecati?</p>
            </div>
          </div>

        </div>
          <div class="section4-bottom w-full lg:h-4/6 sm:h-96 bg-gray-100 flex flex-col justify-center items-center text-white lg:bg-cover">
            <h1 class="text-4xl 2xl:text-5xl">Envie d'aventure ?</h1>
            <p class="mt-2 text-xl text-center px-2 2xl:text-2xl">Nous avons plus de 400 voyages à vous proposer pour vivre votre aventure sans vous soucier de l'organisation !</p>
            <button class="sm:hidden lg:flex text-lg text-white bg-red-500 pl-5 pr-5 pt-3 pb-3 mt-6 rounded-lg flex ease duration-75">
            <img class="mr-1" src="https://img.icons8.com/external-prettycons-flat-prettycons/30/000000/external-send-social-media-prettycons-flat-prettycons.png"/>
            Partir à l'aventure
            </button>
          </div>
      </div>

      <div  class="section5 w-full lg:h-full z-10 bg-white flex flex-col items-center sm:h-full">
        <div class="section5-top w-full lg:h-3/6 sm:h-full flex flex-col items-center justify-around">
          <h1 class="text-center mt-10 text-4xl text-gray-700 font-extrabold px-3">Les avis de nos clients</h1>

          <div class="reviews flex sm:flex-col lg:flex-row sm:h-full justify-center items-center pb-10">
            <div v-for="(user, index) in users" :key="index" class="review px-16 sm:mt-20 sm:flex sm:flex-col sm:items-center sm:text-center lg:pb-16">
              <img :src="user.picture.large" alt="person" class="rounded-full">
              <div class="flex">
                <h1 class="mt-2">{{user.name.first}},</h1>
                <span class="text-gray-700 mt-2 ml-2">{{user.location.country}}</span>
              </div>
              <p class="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita enim ab pariatur exercitationem est officiis natus adipisci excepturi quia iusto !</p>
            </div>
          </div>
        </div>
        <div class="section5-bottom h-full w-full bg-gray-100 flex flex-col justify-center items-center">
          <div class="w-full h-96 bg-gray-200 flex flex-col items-center justify-center">
            <h1 class="text-center text-4xl text-gray-700 font-extrabold px-3">Contactez-nous !</h1>

            <div class="flex flex-col h-30 justify-center items-center mt-10">
            <img src="~assets/svgs/mail.svg" alt="" class="w-10 svg">
            <p class="text-xl"> travel&co@agence.com</p>
            </div>

            <div class="flex flex-col h-30 justify-center items-center mt-10">
            <img src="~assets/svgs/phone.svg" alt="" class="w-10 svg">
            <p class="text-xl"> +33 01 02 03 04 05</p>
            </div>
          </div>
          <div class="footer w-full h-28 bg-gray-700 flex justify-between items-center border-t-2 border-black">
            <div class="socials flex w-80 h-16 justify-around items-center">
              <img src="~assets/svgs/facebook.svg" alt="" class="svg-social w-12 cursor-pointer">
              <img src="~assets/svgs/instagram.svg" alt="" class="svg-social w-12 cursor-pointer">
              <img src="~assets/svgs/twitter.svg" alt="" class="svg-social w-12 cursor-pointer">
            </div>
            <p class="mr-6 text-white">&copy; {{date}} travel&co</p>
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
          img: 'asia-min',
          price: '1300€',
          name: 'Les jardins de la baie',
          desc: 'Singapour',
          rate: '.875',
          new: true,
          discount: {
            isActive: false,
            price: '4500€',
          }
        },
        {
          img: 'asia-min',
          price: '3500€',
          name: 'Singapour',
          desc: 'Voyage a Singapour',
          rate: '.1000',
          new: false,
          discount: {
            isActive: true,
            price: '4500€',
          }
        },
        {
          img: 'asia-min',
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
      ],
      services: [
        {
          img: 'crown',
          title: 'Tout est inclus',
          desc: ''
        },
        {
          img: 'euro',
          title: 'Prix avantageux',
          desc: ''
        },
        {
          img: 'serviceClient',
          title: 'Service client de qualité',
          desc: ''
        }
      ],
      users: [],
      date: ''
    }
  },
  head() {
    return {
      titleTemplate: '%s - Acceuil',
    }
  },
  mounted() {
    this.getRandomUsers()
    this.getYear()
    this.textAnimations()
  },
  methods: {
    getRandomUsers(){
      fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => {
        data.results.forEach(users => {
          this.users.push(users)
        });
      })
    },
    getYear(){
      const date = new Date().getFullYear()
      this.date = date
    },
    textAnimations() {
      const gsap = this.$gsap
      gsap.from('.text-anim', {opacity:0,x:-20, duration: 1, ease: 'power2.inOut'})
      gsap.to('.text-anim', {opacity:1, duration: 1, stagger: 0.1})

    }
  },
  
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>