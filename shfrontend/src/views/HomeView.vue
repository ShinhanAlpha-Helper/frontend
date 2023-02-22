<template>
    <div class="page">
        <header></header>
        <nav>
            <div class="main">
                <img src="../assets/main/main.png">
                <button class="menu" onclick=""></button>
            </div>
            <!-- 모달창 -->
            <div class="black-bg" v-if="modalOpen === true">
                <img class="modalOpen" src="../assets/main/modal.png">
                <router-link to="/login"><button class="modalVoca" style="cursor: pointer;"></button></router-link>
                <button v-on:click="modalOpen = false" class="modal-exit-btn1"></button>
                <button v-on:click="modalOpen = false" class="modal-exit-btn2"></button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: true
    }
  },
}
</script>

<style scoped>
.page {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 375px;
}
nav {
    padding: 0;
    position: relative;
    height: 631px;
}
.menu {
  position: relative;
  float: left;
  top: -40px;
  left: 2px;
  height: 40px;
  width: 50px;
  background-color: transparent;
  border-color: transparent;
}
.modalOpen {
  width: 372px;
  position: absolute;
  margin-top: 355px;
}
img {
  position: relative;
}

.black-bg {
  display: flex;
  position: relative;
  align-items: center;
  width: 372px;
  height: 631px;
  background-color: rgba(0, 0, 0, 0.432);
  top: -670px;
}

.white-bg {
  width: 375px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

/* button css */
.modalVoca {
  position: relative;
  width: 96px;
  height: 25px;
  top: 185px;
  left: 19px;
  background-color: transparent;
  border-color: transparent;
}

.modal-exit-btn1 {
  position: relative;
  top: 280px;
  right: 85px;
  width: 100px;
  height: 30px;
  background-color: transparent;
  border-color: transparent;
}
.modal-exit-btn2 {
  position: relative;
  top: 280px;
  left: 113px;
  width: 52px;
  height: 30px;
  background-color: transparent;
  border-color: transparent;
}

.modal-exit-btn1:hover {
  cursor: pointer;
}
.modal-exit-btn2:hover {
  cursor: pointer;
}

</style>
