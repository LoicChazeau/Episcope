<template>
  <div class="loginNav">
    <router-link class="link" to="/connexion">Connexion</router-link>
    <router-link class="link" to="/inscription">Inscription</router-link>
  </div>
  <div class="loginContainer">
    <div class="form">
      <div class="formHeader">
        <p class="title">Connexion</p>
      </div>
      <div class="formBody">
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p>
          <input type="password" placeholder="Password" v-model="password" />
        </p>
        <p v-if="errMsg">{{ errMsg }}</p>
      </div>
      <div class="formFooter">
        <div style="font-size: 1.25rem" class="neon-button" @click="signIn">
          Confirmer
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const signIn = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
      console.log("Successfully logged in!");
      router.push("/");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>

<style lang="scss">
p {
  margin: 0;
}

.loginNav {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    margin: 0 20px;
  }
}

.loginContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.form {
  display: flex;
  flex-direction: column;
  height: 325px;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 35px;

  .formHeader {
    height: 20%;
    justify-content: center;
    display: flex;
    .title {
      font-weight: 400;
      color: rgb(170, 0, 255);
      text-decoration: none;
      font-size: 1.2em;
      text-shadow: 0 0 0.125em rgb(170, 0, 255), 0 0 0.45em rgb(170, 0, 255);
    }
  }
  .formBody {
    height: 60%;

    input {
      margin: 10px 0;
    }
  }
  .formFooter {
    height: 20%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
