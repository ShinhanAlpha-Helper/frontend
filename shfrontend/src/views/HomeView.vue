<template>
    <div class="page">
        <header></header>
        <nav>
            <div class="main">
              <img src="../assets/main/main.png">
              <button class="menu" onclick=""></button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: true,
    }
  }
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

img {
  position: relative;
}

</style>
