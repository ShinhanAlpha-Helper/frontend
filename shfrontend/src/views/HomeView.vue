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
                <button class="modalVoca" style="cursor: pointer;" onclick="location.href=window.location.href+'vocamain'">단어</button>
                <button v-on:click="modalOpen = false" class="modal-exit-btn">닫기</button>
                <button v-on:click="modalOpen = false" class="modal-exit-btn">닫기</button>
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

.modal-exit-btn {
  position: relative;
  float: right;
}

.modal-exit-btn:hover {
  cursor: pointer;
}

</style>
