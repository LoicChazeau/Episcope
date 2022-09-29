<template>
  <div class="drawContainer">
    <div class="cardContainer">
      <div
        v-for="card in cards"
        :key="card.id"
        @mouseover="onOver(card)"
        @mouseleave="onLeave(card)"
        @click="onClick(card)"
        :class="{
          animate__flipInY: disabled[card],
          animate__pulse: hover[card],
        }"
        class="backCard animate__animated animate__infinite"
      >
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "DrawView",
  data() {
    return {
      cards: [0, 1, 2, 3, 4, 5],
      hover: [false, false, false, false, false, false],
      disabled: [false, false, false, false, false, false],
    };
  },
  methods: {
    onClick(card) {
      this.disabled[card] = true;
      setTimeout(() => {
        this.disabled[card] = false;
      }, 1000);
    },
    onOver(card) {
      this.hover[card] = true;
    },
    onLeave(card) {
      this.hover[card] = false;
    },
  },
};
</script>

<style lang="scss">
@import "animate.css";

.drawContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.5%;
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  justify-content: center;
  margin-right: 20px;

  .logo {
    position: relative;
    top: -216px;
    left: 10px;
    width: 70px;
  }

  .backCard {
    width: 175px;
    height: 250px;
    margin: 20px 25px;
  }

  .card {
    width: 175px;
    height: 250px;
    margin: 20px 25px;
    background: linear-gradient(
      109.88deg,
      rgba(255, 255, 255, 0.6) -5.61%,
      rgba(255, 255, 255, 0.2) 80.62%
    );
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
  }
}
</style>
