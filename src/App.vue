<template>
  <nav>
    <div class="navCenter">
      <router-link to="/">Accueil</router-link>
      <router-link to="/tirage">Tirage</router-link>
      <router-link to="/collection">Collection</router-link>
      <span v-if="isLoggedIn">
        <button @click="signOut">Déconnexion</button>
      </span>
      <span v-else>
        <router-link to="/inscription">Incription</router-link>
        <router-link to="/connexion"> Connexion </router-link>
      </span>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(true);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});

const signOut = () => {
  firebase.auth().signOut();
  router.push("/");
};
</script>

<style lang="scss">
@import "animate.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

body {
  margin: 0 !important;
  height: 100vh;
  background: linear-gradient(
    150deg,
    rgb(167, 37, 83) 5%,
    rgba(47, 21, 87) 85%
  );
  font-family: "Roboto", sans-serif;
}

#app {
  height: 100%;
  text-align: center;
  overflow: hidden;
}

nav {
  height: 9vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5vh;

  .navCenter {
    width: 450px;
    display: flex;
    justify-content: space-between;

    a {
      font-weight: 400;
      color: #fff;
      text-decoration: none;
      font-size: 1.2em;
      width: 115px;

      &.router-link-exact-active {
        font-weight: bold;
        color: #2f1557;
      }
    }
  }
}
</style>
