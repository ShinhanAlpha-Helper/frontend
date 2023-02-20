
<template>
    <div class="page">
        <div class="wrap">
            <header>
                <i class="fa-solid fa-arrow-left fa-2x fa-pull-left" onclick=""></i>
                <h2>
                    단어 랭킹
                </h2>
            </header>
            <br>
            <img alt="Vue logo" src="../assets/rankingimg.png">
            <br><br><br>
<!-- 
        <button class="btn"><p :style="{ color : 'black' }">오늘</p></button>
        <button class="btn"><p :style="{ color : 'black' }">주간</p></button>
        <br><br>
        <img alt="Vue logo" src="../assets/medal1.png" ><h2>예수금</h2>
        <br>
        <img alt="Vue logo" src="../assets/medal2.png"><h2>상한가</h2>
        <br>
        <img alt="Vue logo" src="../assets/medal3.png"><h2>공매도</h2> -->
            <div class="tab">
                <button
                    v-for="(tab, index) in tabList"
                    :key="index"
                    @click.prevent="currentTab = index"
                    :class="{'active' : currentTab === index}"
                >
                {{ tab.name }}
                </button>
            </div>
   
            <ul class="tab-content" v-if="currentTab === 0">
            <!-- <li v-for="(item, index) in employList" :key="index"> -->
                <img alt="Vue logo" src="../assets/medal1.png" >예수금<hr>
                <img alt="Vue logo" src="../assets/medal2.png">상한가<hr>
                <img alt="Vue logo" src="../assets/medal3.png">공매도<hr>
            <!-- </li> -->
            </ul>
            <ul class="tab-content" v-if="currentTab === 1">
                <img alt="Vue logo" src="../assets/medal1.png" >인플레이션<hr>
                <img alt="Vue logo" src="../assets/medal2.png">선물<hr>
                <img alt="Vue logo" src="../assets/medal3.png">공모주<hr>
            </ul>
        </div>
        <footer>
            <div id="menu-wrapper">
                <table>
                    <tr>
                        <th><a href="#">X</a></th>
                        <th><a href="#">홈</a> </th>
                        <th><a href="#">계좌<br>개설</a></th>
                        <th><a href="#">인증<br>센터</a></th>
                        <th><a href="#">챗봇</a></th>
                        <th><a href="#">로그인</a></th>
                        <th><a href="#"><i class="fa-solid fa-power-off"></i></a></th>
                    </tr>
                </table>
            </div>
        </footer>
  </div>
</template>


<script>
export default {
  name: "Tab",
  data() {
    return {
      currentTab: 0,
      tabList: [
        { name: "오늘" },

        { name: "주간" },
     
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>


.text {
    color: #FB0000;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
}
.btn {
    /* position: absolute; */
    width: 91px;
    height: 27px;
    /* left: 31px;
    top: 416px; */
    background-color: white;
    border-radius: 10px;
    border-color: black;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
}
.tab button{
    background-color: white;
}

footer {
    z-index: 100;
}

a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
}

#menu-wrapper {
    overflow-x: auto;
    justify-content: center;
    position: fixed;
    bottom: 0;
    border-collapse: collapse;
    height: 60px;
}

table {
    border-collapse: collapse;
    max-width: 375px;
    height: 60px;
}

th {
    text-align: center;
    background-color: #ffffff;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 15px;
}

</style>