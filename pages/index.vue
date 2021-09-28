<template>
  <div class="home">
    <span>LOGO</span>
    <div class="title">
      <h1>Voyager n'a jamais été aussi simple avec <h2>Travel&Co</h2></h1>
      <h2>Agence de voyage</h2>
    </div>
    <!-- <img src="~/assets/beach.jpg" alt="" /> -->
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500&display=swap');
.home {
  width: 100%;
  height: 100vh;
  background-image: url("~/assets/beach.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
}

img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.title{
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
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

@media  (max-width:770px){
  h2{
    color: white;
  }
}
</style>