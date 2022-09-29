<template>
  <div class="collectionContainer">
    <div class="cardContainer">
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
    </div>
    <div class="cardContainer">
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
    </div>
    <div class="cardContainer">
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div class="backCard">
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
    </div>
    <div class="cardContainer">
      <div
        @mouseover="hover_1 = true"
        @mouseleave="hover_1 = false"
        :class="{ animate__shakeX: hover_1 }"
        class="card animate__animated animate__infinite"
      >
        <img
          src="../assets/animals/whale.svg"
          alt="whale"
          style="margin-top: 30px"
        />
      </div>
      <div
        @mouseover="hover_2 = true"
        @mouseleave="hover_2 = false"
        :class="{ animate__flipInY: hover_2 }"
        class="card animate__animated"
      >
        <img
          src="../assets/animals/whale.svg"
          alt="whale"
          style="height: 100px; margin: 76px 0px"
        />
      </div>
      <div
        class="backCard animate__animated animate__infinite animate__flipInY"
      >
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
      <div
        class="backCard animate__animated animate__infinite animate__flipOutY"
      >
        <img src="../assets/card.svg" alt="card" />
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionView",
  data() {
    return {
      hover_1: false,
      hover_2: false,
    };
  },
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 21, 87);
}

::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background: rgb(167, 37, 83);
}

.collectionContainer {
  overflow-y: auto;
  height: 88vh;
  margin-right: 10px;
  margin-left: 20px;

  .cardContainer {
    margin: 15px 0;
    margin-right: 15px;
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
      margin: 0 35px;
      background: linear-gradient(
        109.88deg,
        rgba(255, 255, 255, 0.6) -5.61%,
        rgba(255, 255, 255, 0.2) 80.62%
      );
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 20px;
    }
  }
}

.test {
  background-image: url("../assets/card.svg");
}
</style>
