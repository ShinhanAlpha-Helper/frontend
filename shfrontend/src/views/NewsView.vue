<template>
    <div class="page">
        <header>
            <div>
                <router-link to="/menu"><i class="fa-solid fa-chevron-left fa-pull-left"></i></router-link>
                <div style="display: inline-block; padding-left: 10px;">뉴스/공시</div>
                <i class="fa-solid fa-chevron-down"></i>
                
                <i class="fa-regular fa-file-magnifying-glass"></i> <!--검색 기능 아이콘-->
                <i class="fa-regular fa-bell"></i> <!--종 모양 아이콘-->
                <button style="border: 1px solid black; border-radius: 5px;">가</button>
                <button style="border: 0; background-color: #fff;" onclick="newsreload()"><i class="fa-solid fa-rotate-right"></i></button>
            </div>

            <div id="flexaround" style="padding-top: 20px;">
                <div>
                    <a href="#" class="header_a" onclick="domesticnews()">국내</a>&nbsp;&nbsp;
                    <a href="#" class="header_a" onclick="overseasnews()">해외</a>&nbsp;&nbsp;
                    <a href="#" class="header_a">MY종목</a>
                </div>
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
                <ul id="news" style="list-style: none;">
                </ul>
            </div>
        </main>
        <footer>
            <div id="menu-wrapper">
                <table>
                    <tr>
                        <th><a href="#"><router-link to="/menu"><i class="fa-solid fa-bars"></i></router-link></a></th>
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
export default {
    data() {
        return {
            notes: [],
        }
    },
    created() {
        const defaultimage = 'https://imgnews.pstatic.net/image/thumb70/648/2023/02/22/14076.jpg';
        $(document).ready(function() {
                $.get("http://127.0.0.1:8000/news/domestic")
                    .then((result) => {
                        console.log(result);
                        $("#news").html("");

                        for (let i = result.results.length - 1; i >= 0; i--) {
                            const news = result.results[i];

                            console.log(news.img);
                            if (news.img != '') {
                                $("#news").append(
                                    $(`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
                                        <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
                                        <img src="${news.img}" style="width: 70px; height: 30px;">
                                        </li><hr>`)
                                )
                            }
                            else {
                                $("#news").append(
                                    $(`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
                                        <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
                                        <img src='https://imgnews.pstatic.net/image/thumb70/648/2023/02/22/14076.jpg' style="width: 70px; height: 20px;"/>
                                        </li><hr>`)
                                )                                
                            }
                        }
                    });
            })

    },
    methods: {
        getDomesticNews() {
        fetch("http://127.0.0.1:8000/news/domestic")
            .then((res) => res.json())
            .then((data) => {
            this.newsList = data.results.reverse();
            });
        },
        getOverseasNews() {
        fetch("http://127.0.0.1:8000/news/overseas")
            .then((res) => res.json())
            .then((data) => {
            this.newsList = data.results.reverse();
            });
        },
        reloadNews() {
        this.getDomesticNews();
        this.getOverseasNews();
        },
    },
    // methods: {
    //     domesticnews() {
    //         $.get("http://127.0.0.1:8000/news/domestic")
    //         .then((result) => {
    //             console.log(result);
    //             $("#news").html("");

    //             for (let i = result.results.length - 1; i >= 0; i--) {
    //                 const news = result.results[i];

    //                 if (news.img != '') {
    //                     $("#news").append(
    //                         $(`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
    //                             <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
    //                             <img src="${news.img}" style="width: 70px; height: 30px;">
    //                             </li><hr>`)
    //                     )
    //                 }
    //                 else {
    //                     $("#news").append(
    //                         $(`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
    //                             <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
    //                             <img src="${defaultimage}" style="width: 40px; height: 20px;">
    //                             </li><hr>`)
    //                     )                                
    //                 }
    //             }
    //         });
    //     },
    //     overseasnews() {
    //         $.get("http://127.0.0.1:8000/news/overseas")
    //         .then((result) => {
    //             console.log(result);
    //             $("#news").html("");

    //             for (let i = result.results.length - 1; i >= 0; i--) {
    //                 const news = result.results[i];

    //                 if (news.img != '') {
    //                     $("#news").append(
    //                         $(`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
    //                             <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
    //                             <img src="${news.img}" style="width: 70px; height: 30px;">
    //                             </li><hr>`)
    //                     )
    //                 }
    //                 else {
    //                     $("#news").append(
    //                         $(`<li><span style="font-size: 8px;">${news.date}    ${news.press}</span><br>
    //                             <a href="${news.url}" style="text-decoration: none; font-size: 12px; color: black;"><strong>${news.title}</strong></a>
    //                             <img src="${defaultimage}" style="width: 40px; height: 20px;">
    //                             </li><hr>`)
    //                     )                                
    //                 }
    //             }
    //         });
    //     },
    //     newsreload() {
    //         $.ajax({
    //             type: 'POST',
    //             url: 'http://127.0.0.1:8000/news/domestic',
    //             success: (result) => {
    //                 console.log(result);
    //             }
    //         })

    //         $.ajax({
    //             type: 'POST',
    //             url: 'http://127.0.0.1:8000/news/overseas',
    //             success: (result) => {
    //                 console.log(result);
    //             }
    //         })
    //     }
    // }

}
</script>













































<style scoped>
.page {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 375px;
}





body {
                margin: 0 auto;
                max-width: 375px;
            }

            header {
                margin-top: 30px;
            }

            footer {
                z-index: 100;
            }

            .footer_a {
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