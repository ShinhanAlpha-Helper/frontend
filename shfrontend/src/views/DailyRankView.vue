<template>
    <div class="page">
        <div class="wrap">
            <header>
                <router-link to="/vocamain"><i class="fa-solid fa-arrow-left fa-2x fa-pull-left"></i></router-link>
                <h3>
                    단어 랭킹
                </h3>
            </header>
            <br>
            <img alt="Vue logo" src="../assets/rankingimg.png">
            <br><br><br>

        </div>
        <div class="d-flex justify-content-center">
            <b-tabs content-class="mt-3">
                <b-tab title="오늘" active>
                    <template v-for="(item, i) in todayranking" :key="i">
                        <div v-if="i + 1 == 1">
                            <img alt="Vue logo" src="../assets/medal1.png">{{ item.title }}<hr>
                        </div>
                        <div v-if="i + 1 == 2">
                            <img alt="Vue logo" src="../assets/medal2.png">{{ item.title }}<hr>
                        </div>
                        <div v-if="i + 1 == 3">
                            <img alt="Vue logo" src="../assets/medal3.png">{{ item.title }}<hr>
                        </div>
                    </template>
                </b-tab>
                <b-tab ref="week" title="주간">
                    <template v-for="(item, i) in weeklyranking" :key="i">
                        <div v-if="i + 1 == 1">
                            <img alt="Vue logo" src="../assets/medal1.png">{{ item.title }}<hr>
                        </div>
                        <div v-if="i + 1 == 2">
                            <img alt="Vue logo" src="../assets/medal2.png">{{ item.title }}<hr>
                        </div>
                        <div v-if="i + 1 == 3">
                            <img alt="Vue logo" src="../assets/medal3.png">{{ item.title }}<hr>
                        </div>
                    </template>
                </b-tab>
            </b-tabs>
        </div>
    
        <footer>
            <div id="menu-wrapper">
                <table>
                    <tr>
                        <th><a href="#"><router-link to="/">X</router-link></a></th>
                        <th><a href="#"><router-link to="/">홈</router-link></a></th>
                        <th><a href="#">계좌<br>개설</a></th>
                        <th><a href="#">인증<br>센터</a></th>
                        <th><a href="#">챗봇</a></th>
                        <th><a href="#"><router-link to="/login">로그인</router-link></a></th>
                        <th><a href="#"><i class="fa-solid fa-power-off"></i></a></th>
                    </tr>
                </table>
            </div>
        </footer>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
        todayranking: [],
        weeklyranking: [],
    }
  },
  created() {
    // axios.get('http://127.0.0.1:8000/note/rank/today')
    axios.get('http://127.0.0.1:8000/api/note/rank/today')
    .then(response => {
        console.log(response.data);

        this.todayranking = response.data;
        console.log(this.todayranking);
    });

    // 주간 랭킹
    var currentDay = new Date();  
    var theYear = currentDay.getFullYear();
    var theMonth = currentDay.getMonth();
    var theDate  = currentDay.getDate();
    var theDayOfWeek = currentDay.getDay();
    
    var thisWeek = [];
    
    for(var i=0; i<7; i++) {
        var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        var yyyy = resultDay.getFullYear();
        var mm = Number(resultDay.getMonth()) + 1;
        var dd = resultDay.getDate();
        
        mm = String(mm).length === 1 ? '0' + mm : mm;
        dd = String(dd).length === 1 ? '0' + dd : dd;
        
        thisWeek[i] = yyyy + '-' + mm + '-' + dd;
    }
    // axios.get(`http://127.0.0.1:8000/note/rank/weekly?startdate=${thisWeek[0]}&lastdate=${thisWeek[6]}`)
    axios.get(`http://127.0.0.1:8000/api/note/rank/weekly?startdate=${thisWeek[0]}&lastdate=${thisWeek[6]}`)
    .then(response => {
        console.log(response.data);

        this.weeklyranking = response.data;
        console.log(this.weeklyranking);
    });    
  },
  compatConfig: { MODE: 3 }
}
</script>

<style scoped>
.page {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 375px;
}
.page header i {
    margin-left: 20px;
}
h3 {
    margin-right:50px;
}

.box{
    text-align:center;
    display:inline-block;
    }

.mt-3{
    float:none;
    display:inline-block;
    zoom:1;
}

.container 
    { 
    padding-top: 40px; 
    }

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
    position: fixed;
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
    width: 375px;
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