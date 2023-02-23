<template>
    <div class="page">
        <header>
            <div id="flexbetween">
                <div id="headleft">
                    <router-link to="/menu"><i class="fa-solid fa-chevron-left fa-pull-left"></i></router-link>
                    <div style="display: inline-block; padding-left: 10px;">뉴스/공시</div>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                
                <div id="headright">
                    <i class="fa-solid fa-magnifying-glass-plus" style="margin-right: 10px;"></i> <!--검색 기능 아이콘-->
                    <i class="fa-regular fa-bell" style="margin-right: 10px;"></i> <!--종 모양 아이콘-->
                    <button style="border: 1px solid black; border-radius: 5px; margin-right: 10px;">가</button>
                    <button style="border: 0; background-color: #fff; margin-right: 10px;" @:click="newsreload()"><i class="fa-solid fa-rotate-right"></i></button>
                </div>
            </div>

            <div id="flexaround" style="padding-top: 20px;">
                <div><a href="#" class="header_a" @:click="domesticnews()">국내</a></div>
                <div><a href="#" class="header_a" @:click="overseasnews()">해외</a></div>
                <div><a href="#" class="header_a">MY종목</a></div>
            </div>
            <div style="border-top: 1px solid black; margin: 16px 0;"></div>

            <div id="flexbetween">
                <select>
                    <option selected>전체</option>
                    <option>공시</option>
                    <option>오늘의뉴스</option>
                    <option>IR</option>
                    <option>매매동향</option>
                    <option>시황</option>
                    <option>특징주</option>
                    <option>해외증시</option>
                    <option>외환</option>
                    <option>체권</option>
                    <option>펀드</option>
                    <option>ELS/DLS</option>
                </select>
                <input type="text" placeholder="검색어를 입력하세요">
            </div>
            <div style="border-top: 3px solid black; margin: 16px 0;"></div>
        </header>

        <main>
            <div class="div" style="overflow-y: scroll; height:490px;">
                <ul ref="news" style="list-style: none;">
                </ul>
            </div>
        </main>

        <footer>
            <div id="menu-wrapper">
                <table>
                    <tr>
                        <th><a class="footer_a" href="#"><router-link to="/menu"><i class="fa-solid fa-bars"></i></router-link></a></th>
                        <th><a class="footer_a" href="#"><router-link to="/">홈</router-link></a></th>
                        <th><a class="footer_a" href="#">계좌<br>개설</a></th>
                        <th><a class="footer_a" href="#">인증<br>센터</a></th>
                        <th><a class="footer_a" href="#">챗봇</a></th>
                        <th><a class="footer_a" href="#"><router-link to="/login">로그인</router-link></a></th>
                        <th><a class="footer_a" href="#"><i class="fa-solid fa-power-off"></i></a></th>
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
            defaultimage: 'https://imgnews.pstatic.net/image/thumb70/648/2023/02/22/14076.jpg',
        }
    },
    created() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/news/domestic',
        })
        .then(response => {
            console.log(response.data.results);
            this.$refs.news.innerHTML = "";

            for (let i = response.data.results.length - 1; i >= 0; i--) {
                const news = response.data.results[i];

                if (news.img != '') {
                    this.$refs.news.insertAdjacentHTML("beforeEnd",
                        (`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
                            <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
                            <img src="${news.img}" style="width: 70px; height: 40px;">
                            </li><hr>`)                        
                    )
                }
                else {
                    this.$refs.news.insertAdjacentHTML("beforeEnd",
                        (`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
                            <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
                            <img src="${this.defaultimage}" style="width: 70px; height: 40px;">
                            </li><hr>`)
                    )                                
                }
            }

        });
    },
    methods: {
        domesticnews() {
            axios({
                method: 'get',
                url: 'http://127.0.0.1:8000/news/domestic',
            })
            .then(response => {
                console.log(response.data.results);
                this.$refs.news.innerHTML = "";

                for (let i = response.data.results.length - 1; i >= 0; i--) {
                    const news = response.data.results[i];

                    if (news.img != '') {
                        this.$refs.news.insertAdjacentHTML("beforeEnd",
                            (`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
                                <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
                                <img src="${news.img}" style="width: 70px; height: 40px;">
                                </li><hr>`)                        
                        )
                    }
                    else {
                        this.$refs.news.insertAdjacentHTML("beforeEnd",
                            (`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
                                <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
                                <img src="${this.defaultimage}" style="width: 70px; height: 40px;">
                                </li><hr>`)
                        )                                
                    }
                }

            });
        },
        overseasnews() {
            axios({
                method: 'get',
                url: 'http://127.0.0.1:8000/news/overseas',
            })
            .then(response => {
                console.log(response.data.results);
                this.$refs.news.innerHTML = "";

                for (let i = response.data.results.length - 1; i >= 0; i--) {
                    const news = response.data.results[i];

                    if (news.img != '') {
                        this.$refs.news.insertAdjacentHTML("beforeEnd",
                            (`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
                                <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
                                <img src="${news.img}" style="width: 70px; height: 40px;">
                                </li><hr>`)                        
                        )
                    }
                    else {
                        this.$refs.news.insertAdjacentHTML("beforeEnd",
                            (`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
                                <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
                                <img src="${this.defaultimage}" style="width: 70px; height: 40px;">
                                </li><hr>`)
                        )                                
                    }
                }

            });
        },
        newsreload() {
            axios.post('http://127.0.0.1:8000/news/domestic')
            .then(response => {
                console.log(response.status);
            });

            axios.post('http://127.0.0.1:8000/news/overseas')
            .then(response => {
                console.log(response.status);
            });
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

    header {
        margin-top: 30px;
    }   

    #flexbetween {
        display: flex;
        justify-content: space-between;
    }

    #flexaround {
        display: flex;
        justify-content: space-around;
    }

    select {
        width: 180px;
    }

    #flexaround .header_a {
        color: black;
        text-decoration: none;
        font-size: 15px;
        color: #656565;
    }

    #flexaround .header_a:hover {
        font-weight: bold;
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

<!-- <img alt="Vue logo" src="../assets/medal1.png">예수금<hr>
<img alt="Vue logo" src="../assets/medal2.png">상한가<hr>
<img alt="Vue logo" src="../assets/medal3.png">공매도<hr> -->