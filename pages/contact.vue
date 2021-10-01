<template>
  <div class="product">
    <router-link to="/">
      <img id="logo" src="~/assets/logo-agence-voyage.png" alt="Logo" />
    </router-link>
    <div class="title">
      <h1>Contactez-nous</h1>
      <h3>Une question ou remarque? écrivez-nous un message !</h3>
    </div>
    <form action="">
      <div class="form_left">
        <div class="infos">
          <h1>Informations de contact</h1>
          <p>
            Remplisez le formulaire et notre Equipe se fera un plaisir de vous
            répondre dans les prochaines 24 heures.
          </p>
          <div class="info">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"
            />
            <p>+33 1 23 45 56 78</p>
          </div>
          <div class="info">
            <img
              src="https://img.icons8.com/ios-filled/30/000000/apple-mail.png"
            />
            <p>travel&co@test.com</p>
          </div>
          <div class="info">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/address.png"
            />
            <p>123 Rue du voyage, Paris 75000</p>
          </div>
        </div>
        <div class="socials">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png" />
          <img
            src="https://img.icons8.com/ios-filled/30/000000/twitter-squared.png"
          />
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
          />
          <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" />
        </div>
      </div>

      <div class="right"></div>
    </form>
  </div>
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Contact',
    }
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500&display=swap');

.product {
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
#logo {
  width: 50px;
  position: absolute;
  top: 30px;
  left: 30px;
}

.title {
  text-align: center;
  width: 90%;
}

.title > h1 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
}
.title > h3 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  margin-top: 10px;
}

form {
  width: 70%;
  height: 60%;
  background-color: #fff;
  margin-bottom: 150px;
  border-radius: 20px;
}

.form_left {
  width: 40%;
  height: 100%;
  padding: 10px;
  background-color: #3e2093;
  border-radius: 20px;
  -webkit-box-shadow: 11px 2px 10px -3px rgba(0, 0, 0, 0.48);
  box-shadow: 11px 2px 10px -3px rgba(0, 0, 0, 0.48);
}

.infos {
  padding: 20px;
  color: white;
}

.infos > p {
  opacity: 0.7;
}

.info {
  display: flex;
  margin: 30px 0 30px 0;
}
.info > p {
  margin-left: 20px;
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
}

img {
  min-width: 30px;
  max-height: 30px;
}

/* Mediaquery  */
@media (max-width: 1000px) {
  .form_left {
    min-width: 280px;
  }
}
</style>