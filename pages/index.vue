<template>
  <div class="home">
    <div class="section1">
      <span>LOGO</span>
      <div class="title">
        <h1>
          Voyager n'a jamais été aussi simple avec
          <h2>Travel&Co</h2>
        </h1>
        <h2>Agence de voyage</h2>
        <a href="#section2">
          <img id="bg-img" src="~/assets/down.svg" alt="down arrow" />
        </a>
      </div>
    </div>

    <div  id="section2" class="section2">
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam! Commodi itaque necessitatibus autem asperiores! Minus natus dicta modi. Eius.</p>
          <div id="separator"></div>
        </div>
        <div class="bottom">
          <div class="card">
            <img src="~/assets/work.jpg" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, beatae.</p>
          </div>
          <div class="card">
            <img src="~/assets/work.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam possimus debitis veritatis consectetur facilis!</p>
          </div>
          <div class="card">
            <img src="~/assets/work.jpg" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, beatae.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500&display=swap');
a{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-right: 100px;
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.section1 {
  width: 100%;
  height: 100vh;
  background-image: url('~/assets/beach.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  filter: invert(0%) sepia(0%) saturate(110%) hue-rotate(0deg) brightness(100%)
    contrast(120%);
}

.section2 {
  width: 100%;
  height: 100vh;
}

.gallery{
  margin: 10px;
}

.section2>img {
  max-width: 100%;
  height: auto;
}

.gallery__item{
  height: auto;
  margin: 0.5rem;
}

.gallery__item img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media  (min-width: 640px){
  .gallery{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 300px);
    grid-auto-flow: row dense;
  }
  .gallery__item{
    margin: 0.7rem;
  }

  .gallery__item:first-child{
    grid-row: span 2;
  }
  .gallery__item:nth-child(2){
    grid-column: 1;
    grid-row: span 2;
  }
  .gallery__item:nth-child(6),
  .gallery__item:nth-child(3){
    grid-row: span 2;
  }

  .gallery__item:nth-child(4){
    grid-row: span 2;
  }
}

#bg-img {
  position: absolute;
  width: 100px;
  bottom: 60px;
  cursor: pointer;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
h1 {
  color: rgb(32, 32, 32);
  font-size: 45px;
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
}
h2 {
  margin-top: 20px;
  color: rgb(32, 32, 32);
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
}
span {
  position: absolute;
  top: 20px;
  left: 20px;
}

@media (max-width: 770px) {
  h2 {
    color: white;
  }
  #bg-img {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(-20deg)
      brightness(500%) contrast(200%);
  }
  .section1 {
    align-items: flex-start;
  }
  .title {
    margin-top: 180px;
  }
}

/* Section 3 services */

#section3{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: whitesmoke; */
}

.top{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 500px;
  height: 25%;
  margin-top: 100px;
}

p{
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
}

.bottom{
  display: flex;
  width: 80%;
  height: 650px;
  align-items: center;
}

.card{
  width: 600px;
  height: 600px;
  margin: 20px;
}

.card>img{
  width: 100%;
  object-fit: cover;
  padding: 10px;
}

@media  (max-width:860px) {
  .bottom{
    flex-direction: column;
  }
  .card{
    width: 375px;
  }
  .top{
    width: 375px;
  }
}

</style>