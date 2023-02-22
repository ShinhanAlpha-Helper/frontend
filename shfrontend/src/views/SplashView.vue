<template>
    <div class="page">
        <header></header>
        <nav>
            <div class="loading">
                <img src="../assets/shinhan-logo.png">
                <strong>신한투자증권</strong>
                <p>신규 상장 종목이 안 보인다면 알파를 다시 실행하세요.</p>
            </div>
            <div class="progressbarWrapper">
                <span id="greenBar"></span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  methods: {
    pageMove() {
        this.$router.push({name:'home'})
    },
    move() {
        let elem = document.getElementById("greenBar");
        let stepValue = 0;
        let id = setInterval(frame, 280);

        function frame() {

            if (stepValue >= 100) {
            clearInterval(id);
            
            } else {
            elem.style.width = (stepValue + 10) + "%";
            elem.innerHTML = (stepValue + 10) + "%";
            stepValue=(stepValue + 10);
            }
        }
    }
  },
  mounted() {
    setTimeout(this.pageMove, 3000)
    this.move()
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
    height: 631px;
    background-color: rgba(71, 58, 223, 1);
}
.loading {
    text-align: center;
    height: 631px;
}

img {
    position: relative;
    top: 250px;
}
strong {
    position: absolute;
    color: #ffffff;
    bottom: 70px;
    right: 139.5px;
}
p {
    position: absolute;
    color: #ffffff;
    font-size: 12px;
    bottom: 0;
    left: 42.5px;
}

.progressbarWrapper {
  height: 12px;
  width: 500px;
  max-width: 80%;
  display: block;
  margin: auto;
  margin-top: 20vh;
  position: relative;
  bottom: 205px;
  background: rgba(71, 58, 223, 1);
  padding: 3px;
}

#greenBar {
  display: block;
  height: 100%;
  width: 0px;
  background-color: #ffffff;
  background-image: linear-gradient(
    center bottom,
    rgb(43, 194, 83) 37%,
    rgb(84, 240, 84) 69%
  );
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  font-size: 15px;
  text-align: center;
  color: white;
  transition: all cubic-bezier(.15,.75,.84,.61) 300ms
}

</style>
