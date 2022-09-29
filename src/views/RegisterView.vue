<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Confirmer</button></p>
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      console.log("Successfully registered!");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
