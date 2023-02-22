<template>
    <div class="page">
        <header></header>
        <nav>
            <div class="main">
                <img src="../assets/main/main.png">
                <button class="menu" onclick=""></button>
            </div>
            <!-- 모달창 -->
            <transition name="fade" v-if="flag === 'true'">
              <div class="black-bg" v-if="modalOpen">
                <div class="white-bg">
                  <div class="context">
                    <h5>단어 검색하고<br>나만의 단어장 만들자</h5>
                    <p>모르는 단어를 검색해 보고 나만의 단어장에 저장해 공부할 수 있습니다.</p>
                    <p>* 검색 서비스와 단어장 서비스는 <span>앱 설정에서 on/off</span>를 통해 제공됩니다.</p>
                    <p>* <span>단어장 서비스는 로그인이 필요한 서비스</span>입니다.</p>
                    <img src="../assets/main/book.png" class="book">
                    <button class="toUse" style="cursor: pointer;" onclick="location.href=window.location.href+''">사용하러 가기</button>
                  </div>  
                  <div class="closeBtn">  
                    <button @click="modalToday" class="modal-exit-btn1">오늘 보지 않기</button>
                    <button @click="modalClose" class="modal-exit-btn2">닫기 </button>
                  </div>  
                </div>
              </div>
          </transition>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
      flag: 'true',
    }
  },
  methods: {
    modal() {
      this.modalOpen = !this.modalOpen
    },
    modalToday() {
      localStorage.setItem("flag", false);
      this.flag = 'false';
    },
    modalClose() {
      this.flag = 'false'; // bool
    },
  },
  mounted() {
    this.modal()    
  },
  created() {
    if (localStorage["flag"] === 'false') {
      localStorage.setItem("flag", false);
      this.flag = localStorage["flag"];     
    } 

    if (localStorage["flag"] == undefined) {
      localStorage.setItem("flag", true);
      this.flag = localStorage["flag"];
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

img {
  position: relative;
}
.book {
  bottom: 95px;
  left: 200px;
}


.context {
  text-align: left;
  padding-left: 20px;
  position: relative;
  top: 30px;
}

p{
  font-size: 10px;
  margin-bottom: 0px;
  position: relative;
  top: 45px;
  font-weight: bold;
}
span{
  color: red;
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
  height: 240px;
  background-color: rgba(242, 242, 253, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  top: 196px;
}
/* button css */
.modal-exit-btn1 {
  position: relative;
  top: 10px;
  right: 90px;
  width: 120px;
  height: 40px;
  background-color: #ffffff;
  border-color: transparent;
  font-size: 13px;
}
.modal-exit-btn2 {
  position: relative;
  top: 10px;
  left: 85px;
  width: 70px;
  height: 40px;
  background-color: #ffffff;
  border-color: transparent;
  font-size: 13px;
}
.closeBtn {
  background-color: #ffffff;
  width: 375px;
  position: absolute;
  bottom: 0;
  height: 60px;
}
.toUse {
  position: relative;
  bottom: 76px;
  right: 122px;
  height: 30px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: bold;
  color: #ffffff;
  background-color: rgba(54, 71, 242, 1);
  border-color: transparent;
}

.modal-exit-btn1:hover {
  cursor: pointer;
}
.modal-exit-btn2:hover {
  cursor: pointer;
}

transition {
  transition: 0.5s ease-in-out;
}

</style>
