<template>
  <nav>
    <div class="navLeft"></div>
    <div class="navCenter">
      <router-link to="/">Accueil</router-link>
      <router-link to="/tirage">Tirage</router-link>
      <router-link to="/collection">Collection</router-link>
    </div>
    <div class="navRight">
      <span style="display: flex" v-if="isLoggedIn">
        <img
          class="logout"
          @click="signOut"
          src="./assets/logout.svg"
          alt="logout"
        />
      </span>
      <span v-else>
        <router-link class="neon-button" to="/connexion">Connexion</router-link>
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

  .navLeft {
    display: flex;
    width: 23.5vw;
    justify-content: flex-start;
    padding: 0 2vw;
  }

  .navCenter {
    width: 41vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;

    a {
      font-weight: 400;
      color: #fff;
      text-decoration: none;
      font-size: 1.2em;
      width: 140px;
      border: transparent 0.125em solid;
      margin: 0 10px;
      text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em white;

      &.router-link-exact-active {
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
        color: white;
        border: var(--clr-neon) 0.125em solid;
        padding: 0.25em 0em;
        border-radius: 0.25em;
        text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em white;
        box-shadow: inset 0 0 0.5em 0 var(--clr-neon),
          0 0 0.5em 0 var(--clr-neon);
        position: relative;
      }

      &:hover {
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
        color: white;
        border: var(--clr-neon) 0.125em solid;
        padding: 0.25em 0em;
        border-radius: 0.25em;
        text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em white;
        box-shadow: inset 0 0 0.5em 0 var(--clr-neon),
          0 0 0.5em 0 var(--clr-neon);
        position: relative;
      }
    }
  }
  .logout {
    cursor: pointer;
    width: 30px;
    filter: invert(100%) sepia(0%) saturate(7499%) hue-rotate(326deg)
      brightness(101%) contrast(100%);

    &:hover {
      filter: invert(7%) sepia(46%) saturate(7494%) hue-rotate(263deg)
        brightness(81%) contrast(93%);
    }
  }
  .navRight {
    display: flex;
    width: 23.5vw;
    justify-content: flex-end;
    padding: 0 2vw;

    a {
      font-weight: 400;
      color: #fff;
      text-decoration: none;
      font-size: 1.2em;
      width: 115px;
    }
  }
}

:root {
  // --clr-neon: hsl(317 100% 54%);
  --clr-neon: rgb(170, 0, 255);
  --clr-bg: hsl(323 21% 16%);
}

.neon-button {
  font-size: 4rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: white;
  border: var(--clr-neon) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);
  position: relative;
}

.neon-button::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em 0.5em var(--clr-neon);
  opacity: 0;
  background-color: var(--clr-neon);
  z-index: -1;
  transition: opacity 100ms linear;
}

.neon-button:hover,
.neon-button:active {
  color: white;
  text-shadow: none;
}

.neon-button:hover::after,
.neon-button:active::after {
  opacity: 1;
}

.neon {
  display: block;
  text-decoration: none;
  padding: 10px 25px;
  position: relative;
}
.neon::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: var(--clr-neon);
  z-index: -1;
  box-shadow: 0 0 10px var(--clr-neon), 0 0 20px var(--clr-neon),
    0 0 40px var(--clr-neon), 0 0 80px var(--clr-neon),
    0 0 100px var(--clr-neon);
  transition: 0.25s;
}
.neon:hover::before {
  width: 100%;
}
</style>
