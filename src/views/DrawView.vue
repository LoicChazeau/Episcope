<template>
  <div class="drawContainer">
    <div class="cardContainer" style="margin-right: 20px">
      <div class="backCard animate__animated animate__infinite animate__pulse">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard animate__animated animate__infinite animate__pulse">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard animate__animated animate__infinite animate__pulse">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
    </div>
    <div class="cardContainer" style="margin-right: 20px">
      <div class="backCard animate__animated animate__infinite animate__pulse">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard animate__animated animate__infinite animate__pulse">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard animate__animated animate__infinite animate__pulse">
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
      hover: false,
    };
  },
};
</script>

<style lang="scss">
@import "animate.css";

.drawContainer {
  display: flex;
  flex-direction: column;
  margin-top: 3.5%;
}

.cardContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;

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
