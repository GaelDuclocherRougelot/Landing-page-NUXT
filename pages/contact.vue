<template>
  <div class="product">
    <router-link to="/">
      <img id="logo" src="~/assets/logo-agence-voyage.png" alt="Logo" />
    </router-link>
    <div class="title">
      <h1>Contactez-nous</h1>
      <h3>Une question ou remarque? écrivez-nous un message !</h3>
    </div>
    <div class="form_group">
      <div class="form_left">
        <div class="infos">
          <div class="info_title">
            <h1>Informations de contact</h1>
            <p>
              Remplisez le formulaire et notre Equipe se fera un plaisir de vous
              répondre dans les prochaines 24 heures.
            </p>
          </div>

          <div class="info_contact">
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
            <div class="bg_socials">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png"
              />
            </div>
            <div class="bg_socials">
              <img
                src="https://img.icons8.com/ios-filled/30/000000/twitter-squared.png"
              />
            </div>
            <div class="bg_socials">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
              />
            </div>
            <div class="bg_socials">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <form>
          <div class="names">
            <div class="inputs">
              <p>Prénom</p>
              <input type="text" placeholder="John" />
              <span></span>
            </div>
            <div class="inputs">
              <p>Nom</p>
              <input type="text" placeholder="Doe" />
              <span></span>
            </div>
          </div>
          <div class="names">
            <div class="inputs">
              <p>E-mail</p>
              <input type="email" placeholder="test@test.com" />
              <span></span>
            </div>
            <div class="inputs">
              <p>Téléphone</p>
              <input type="text" placeholder="+00 00 00 00 00" />
              <span></span>
            </div>
          </div>
          <div class="user_message">
            <p>Message</p>
            <textarea placeholder="écrivez votre message.."></textarea>
            <span></span>
          </div>
            <button>Envoyer</button>
        </form>
      </div>
    </div>

    <h4>Ce site n'est pas réel.</h4>
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
  transform: scale(1.6);
  position: absolute;
  top: 40px;
  left: 40px;
}

.title {
  text-align: center;
  width: 90%;
  color: #02044A;
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

h4 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
}

.form_group {
  width: 70%;
  height: 60%;
  background-color: #fff;
  margin-bottom: 150px;
  border-radius: 20px;
  display: flex;
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
  height: 100%;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.info_title > p {
  opacity: 0.7;
}

.info {
  display: flex;
  margin: 20px 0 20px 0;
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

.info_contact {
  display: flex;
  flex-direction: column;
}

.socials {
  display: flex;
  align-self: center;
}

.bg_socials {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
}

.bg_socials:hover {
  background-color: #fff;
}

.right {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right > form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Quicksand', sans-serif;
}

.names {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
}

.inputs {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.inputs > p {
  color: rgba(128, 128, 128, 0.726);
}

.inputs > span {
  width: 90%;
  height: 2px;
  background-color: rgba(128, 128, 128, 0.726);
  margin-top: 10px;
}

input {
  border: none;
  padding: 10px;
  font-size: 17px;
  color: #3e2093;
  font-weight: 600;
  font-family: 'Quicksand', sans-serif;
}

input:focus {
  outline: #fff;
}

::placeholder {
  color: rgba(128, 128, 128, 0.726);
}

.user_message {
  height: 40%;
  width: 80%;
  margin-bottom: 50px;
  margin-top: 50px;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
}

.user_message > span {
  width: 100%;
  height: 2px;
  background-color: rgba(128, 128, 128, 0.726);
}

.user_message > p {
  color: #3e2093;
  margin-bottom: 5px;
  font-weight: 600;
}

textarea {
  width: 100%;
  height: 100%;
  resize: none;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  padding: 10px;
  border: none;
}

textarea::placeholder {
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
}

textarea:focus {
  outline: white;
}

button {
  width: 200px;
  align-self: end;
  margin-bottom: 40px;
  margin-right: 40px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #3e2093;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
}
</style>