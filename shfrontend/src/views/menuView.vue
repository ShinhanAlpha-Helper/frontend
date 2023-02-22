<template>
    <div class="page">
        <header>
          <div>
              <div class="sticky-top" style="padding-bottom:0px; background-color: #3F81D7; width: 100%; height: 82px;">
                  <input type="text" placeholder="메뉴 · 종목 검색" style="border-radius: 5px; margin-left: 20px; margin-top: 10px;">
                  <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button" style="border:none; background-color: #3F81D7;"><i class="fa-solid fa-magnifying-glass-plus"></i></a>
                  <i class="fa-regular fa-bell"></i>
                  <router-link to="/setting"><i class="fa-solid fa-gear" style="margin: 11px;"></i></router-link>
                  <div class="topnavs">
                      <div class="topnav">매매</div><div class="topnav">상품</div><div class="topnav">뱅킹/공모주</div><div class="topnav">고객센터</div>
                  </div>
              </div>
          </div>
        </header>
        <!-- Modal -->
        <main>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div>
                            <div class="modal-header">
                                <div class="mb-3">
                                    <label for="title" class="col-form-label">검색창</label>
                                    <textarea class="form-control" id="title" v-model="title"></textarea>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <!-- <div class="modal-footer">
                                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" @click="search">검색</button>
                            </div> -->
                            <div class="text-right">
                                <button type="button" class="btn btn-primary" @click="search">검색</button>
                            </div>
                        </div>

                        <div>
                            <div id="content">
                                <p>{{ content }}</p>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" @click="AddWord(voca.title, voca.content)">단어장에 추가</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">단어</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            단어뜻
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" @click="AddWord(voca.title, voca.content)">단어장에 추가</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">단어장에추가</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            단어장에 추가되었습니다.
                        </div>
                        <div class="modal-footer">
                            <router-link to="/vocamain"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">단어장으로 가기</button></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4 side-left">
                    <div>
                        <div id="list-example" class="list-group box1">
                            <a class="list-group-item list-group-item-action" href="#list-item-1" style="background-color: #F0F1F5; width: 105px;">국내주식</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-2" style="background-color: #F0F1F5; width: 105px;">해외주식</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-3" style="background-color: #F0F1F5; width: 105px;">CFD</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4" style="background-color: #F0F1F5; width: 105px;">선물옵션</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-5" style="background-color: #F0F1F5; width: 105px;">기타시장</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-6" style="background-color: #F0F1F5; width: 105px;">투자정보</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-7" style="background-color: #F0F1F5; width: 105px;">투자플러스</a>
                        </div>
                    </div>
                </div>
                <div class="col-8 side-right">
                    <div style = "text-align:left;" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                        <div style="background-color: #F7F8FA; padding: 15px; "><strong>국내주식</strong></div>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>종목찾기</strong></h6>
                        <hr>
                        
                        <p style = text-aglin: left>실시간종목순위</p><p>신한인기종목</p><p>외국인/기관 순매수</p><p>테마(섹터)순위</p><p>신한리서치추천</p><p>신규리서치추천</p><p>신규상장종목</p><p>공매도/대차</p><p>시장조치</p><p>ETF/ETN</p>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>종목조건검색</strong></h6>
                        <hr>
                        <p>간편조건검색</p><p>조건검색</p><p>차트패턴검색</p>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>주식매매</strong></h6>
                        <hr>
                        <p>주식종목검색</p><p>관심종목</p><p>주식/ETF 현재가</p><p>주식/ETF 주문</p><p>주식잔고/손익</p><p>체결/매매내역</p><p>물타기계산기</p>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>다양한 주문</strong></h6>
                        <hr>
                        <p>예약주문</p><p>호가주문</p><p>스탑자동주문</p><p>바로주문</p><p>알파카트(일괄매수)</p><p>제휴대출주문</p><p>대주차입주문</p><p>권리공매도주문</p>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>주식 거래확인</strong></h6>
                        <hr>
                        <p>반대매매예정내역</p><p>미수동결담보부족현황</p><p>매매다이어리</p>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>국내주식 소수점투자</strong></h6>
                        <hr>
                        <p>소수점 투자</p><p>소수점 거래신청</p>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>국내주식 간편투자</strong></h6>
                        <hr>
                        <p>주식/ETF 정기투자 가입</p><p>주식/ETF 정기투자 내역</p>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>차트</strong></h6>
                        <hr>
                        <p>종합차트</p><p>지수/업종차트</p>
                        <h6 id="list-item-1" style="padding-top: 15px; text-align:left;"><strong>주식 가이드</strong></h6>
                        <hr>
                        <p>주식투자 가이드</p><p>주식용어 가이드</p>


                        <div style="background-color: #F7F8FA; padding: 15px; text-align:left;"><strong>해외주식</strong></div>
                        <h6 id="list-item-2" style="padding-top: 15px; text-align:left;"><strong>해외주식 매매</strong></h6>
                        <hr>
                        <p>해외종목검색</p><p>관심종목</p><p>해외주식 현재가</p><p>해외주식 종합차트</p><p>해외주식 주문</p><p>해외주식 예약주문</p><p>해외주식 예약주문</p><p>해외주식 소수점 투자</p><p>해외주식 거래신청</p><p>실시간 시세신청</p>
                        <h6 id="list-item-2" style="padding-top: 15px; text-align:left;"><strong>해외주식 거래확인</strong></h6>
                        <hr>
                        <p>해외주식 잔고/수익</p><p>해외주식 체결/매매내역</p><p>해외주식 배당/세금</p>
                        <h6 id="list-item-2" style="padding-top: 15px; text-align:left;"><strong>환전</strong></h6>
                        <hr>
                        <p>환율조회</p><p>환전신청</p><p>환전신청내역</p>
                        <h6 id="list-item-2" style="padding-top: 15px; text-align:left;"><strong>해외주식 정기투자</strong></h6>
                        <hr>
                        <p>플랜yest 정기투자 가입</p><p>플랜yest 정기투자 내역</p>
                        <h6 id="list-item-2" style="padding-top: 15px; text-align:left;"><strong>종목상세검색</strong></h6>
                        <hr>
                        <p>해외종목순위</p><p>미국종목발굴</p><p>글로벌 종목정보</p><p>글로벌ETF 정보</p><p>업종/테마별ETF</p><p>미국레버리지ETF</p>
                        <h6 id="list-item-2" style="padding-top: 15px; text-align:left;"><strong>해외주식 시작하기</strong></h6>
                        <hr>                    
                        <p>해외주식 공지사항</p><p>해외주식 시장안내</p><p>해외주식 유의사항</p><p>해외주식 FAQ</p>

                        <div style="background-color: #F7F8FA; padding: 15px; text-align:left;"><strong>CFD</strong></div>
                        <h6 id="list-item-3" style="padding-top: 15px; text-align:left;"><strong>CFD 매매</strong></h6>
                        <hr>
                        <p>CFD 종목검색</p><p>CFD 현재가</p><p>CFD 주문</p><p>CFD 차트</p><p>CFD 잔고/손익</p><p>CFD 체결/매매내역</p><p>CFD 청산내역</p><p>CFD 리콜내역</p>
                        <h6 id="list-item-3" style="padding-top: 15px; text-align:left;"><strong>CFD 계좌/증거금</strong></h6>
                        <hr>
                        <p>CFD 예탁금/증거금</p>
                        <h6 id="list-item-3" style="padding-top: 15px; text-align:left;"><strong>CFD 신청</strong></h6>
                        <hr>
                        <p>CFD 신청</p>
                        <h6 id="list-item-3" style="padding-top: 15px; text-align:left;"><strong>CFD 가이드</strong></h6>
                        <hr>
                        <p>CFD 시작하기</p>


                        <div style="background-color: #F7F8FA; padding: 15px; text-align:left;"><strong>선물옵션</strong></div>
                        <h6 id="list-item-4" style="padding-top: 15px; text-align:left;"><strong>선물옵션 매매</strong></h6>
                        <hr>
                        <p>선물옵션 현재가</p><p>선물옵션 주문</p><p>선물옵션 차트</p><p>선물옵션 잔고/손익</p><p>선물옵션 체결/매매내역</p><p>지수선물 전종목시세</p><p>지수옵션 전종목시세</p><p>선물옵션지수종합</p><p>기초자산추이</p><p>선물옵션 예약주문</p>
                        <h6 id="list-item-4" style="padding-top: 15px; text-align:left;" ><strong>야간선물옵션 매매</strong></h6>
                        <hr>
                        <p>야간선물옵션 현재가</p><p>야간선물옵션 주문</p><p>야간선물옵션 차트</p>
                        <h6 id="list-item-4" style="padding-top: 15px; text-align:left;"><strong>선물옵션 계좌/증거금</strong></h6>
                        <hr>
                        <p>계좌별 위탁증거금</p><p>종목별 위탁증거금</p><p>선물옵션 주문증거금</p><p>선물대용 지정/해제</p><p>선물정산가 조회</p><p>추가증거금계좌 복수주문</p>
                        <h6 id="list-item-4" style="padding-top: 15px; text-align:left;"><strong>신청/등록</strong></h6>
                        <hr>
                        <p>선물옵션 거래신청</p><p>매매신청(유렉스연계)</p><p>사전투자경험신청</p><p>타사 거래확인서 등록</p><p>선물옵션 계좌유형설정</p><p>선물옵션약관승인</p>
                        <h6 id="list-item-4" style="padding-top: 15px; text-align:left;"><strong>선물옵션 가이드</strong></h6>
                        <hr>                    
                        <p>선물옵션 시작하기</p>


                        <div style="background-color: #F7F8FA; padding: 15px; text-align:left;" ><strong>기타시장</strong></div>
                        <h6 id="list-item-5" style="padding-top: 15px; text-align:left;"><strong>금현물</strong></h6>
                        <hr>
                        <p>금현물 현재가</p><p>금현물 주문</p><p>금현물 잔고</p>
                        <h6 id="list-item-5" style="padding-top: 15px; text-align:left;"><strong>K-OTC</strong></h6>
                        <hr>
                        <p>K-OTC 현재가</p><p>K-OTC 주문</p>
                        <h6 id="list-item-5" style="padding-top: 15px; text-align:left;"><strong>코넥스(KONEX)</strong></h6>
                        <hr>
                        <p>코넥스 현재가</p><p>코넥스 주문</p>
                        <h6 id="list-item-5" style="padding-top: 15px; text-align:left;"><strong>ELW</strong></h6>
                        <hr>
                        <p>ELW 현재가</p><p>ELW 주문</p>
                        <h6 id="list-item-5" style="padding-top: 15px; text-align:left;"><strong>신주인수권</strong></h6>
                        <hr>
                        <p>신주인수권 현재가</p><p>신주인수권 주문</p>
                        <h6 id="list-item-5" style="padding-top: 15px; text-align:left;"><strong>기타</strong></h6>
                        <hr>
                        <p>비상장주식(서울거래소)</p>                


                        <div style="background-color: #F7F8FA; padding: 15px; text-align:left;"><strong>투자정보</strong></div>
                        <h6 id="list-item-6" style="padding-top: 15px; text-align:left;"><strong>시장동향</strong></h6>
                        <hr>                    
                        <p>지수/환율/시장지표</p><p>국내시장 매매동향</p><p>최신시황</p><p>글로벌경제지표</p>
                        <h6 id="list-item-6" style="padding-top: 15px; text-align:left;"><strong>이슈/일정</strong></h6>
                        <hr>                    
                        <p>뉴스/공시</p><p>국내/해외 증시일정</p><p>해외주식 권리</p>
                        <h6 id="list-item-6" style="padding-top: 15px; text-align:left;"><strong>디지털 자산</strong></h6>
                        <hr>                    
                        <p>디지털자산 시세</p><p>디지털자산 리서치</p><p>디지털자산 알아보기</p>
                        <h6 id="list-item-6" style="padding-top: 15px; text-align:left;"><strong>영상 칼럼</strong></h6>
                        <hr>                    
                        <p>유튜브공식채널</p><p>증권방송</p>
                        <h6 id="list-item-6" style="padding-top: 15px; text-align:left;"><strong>신한리서치</strong></h6>
                        <hr>                    
                        <p>신한리서치리포트</p><p>리서치캘린더</p>


                        <div style="background-color: #F7F8FA; padding: 15px; text-align:left;"><strong>투자플러스</strong></div>
                        <h6 id="list-item-7" style="padding-top: 15px; text-align:left;"><strong>투자플러스 서비스</strong></h6>
                        <hr>    
                        <p>투자플러스</p><p id="note" style="display: none; text-align:left;">단어장</p>
                        <h6 id="list-item-7" style="padding-top: 15px; text-align:left;"><strong>이슈</strong></h6>
                        <hr>    
                        <p>이슈진단</p><p>종목이슈체크</p>
                        <h6 id="list-item-7" style="padding-top: 15px; text-align:left;"><strong>종목찾기</strong></h6>
                        <hr>    
                        <p>마법공식</p><p>종목분석검색</p><p>취향저격</p><p>고수들의 종목</p>
                        <h6 id="list-item-7" style="padding-top: 15px; text-align:left;"><strong>종목추천</strong></h6>
                        <hr>    
                        <p>파워맵</p><p>수급파인더</p><p>5STAR</p><p>스톡봇</p><p>로보스탁</p><p>시그널엔진</p><p>뉴지스탁</p>               
                    </div>
                </div>
            </div>
        </main>

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
            title: '',
            content: ''
        }
    },
    created() {

    },
    methods: {
        search() {
            axios({
                method: 'get',
                url: `http://127.0.0.1:8000/dict?title=${this.title}`,
                // headers: {
                //     Authorization: 'JWT '
                // },
                // data: {
                //     title: titleid,
                //     content:contentid
                // },
            })
            .then(response => {
                this.content = response.data[0].content;
                console.log(content)
            })
            .catch(error => {
                console.error(error);
            })
        },
        AddWord(titleid, contentid) {
            const token = localStorage["token"];
            if (!token) {
                console.error('Token not found');
                return;
            }
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/note',
                headers: {
                    Authorization: 'JWT ' + token,
                },
                data: {
                    title: titleid,
                    content: contentid
                },
            })
            .then(response => {
                console.log(response.status);
            })
            .catch(error => {
                console.error(error);
                // loginpage로 이동
            });
        }
    }
}



</script>

<style scoped>
.modal-dialog.modal-dialog-centered {
  display: inline-block;
  text-align: left;
  width: 250px;
  /* vertical-align: middle;  */
}
.modal.fade1{
  /* width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: top; */
  text-align: center;
}
.page {
     margin: 0 auto;
    /* margin-top: 30px; */
    max-width: 375px;
}

.box1 {
    top: 0;
    /* line-height: 50px; */
}

list-example {
    padding-top: 15px;
    background-color: #F0F1F5; 
    width: 105px;
}
        
header {
    position: fixed;
    z-index: 100;
    /* top: 0; */
    /* width: 100%; */
}
.topnavs {
    text-align: center;
}
.topnav {
    margin: 10px 10px;
    display: inline-block;
    color: #ffffff;
    font-size: 20px;
}
main {
    position: relative;
    /* top: 52px; */
    top: 80px;
    left: 0;
    right: 0;
}
.side-left {
    position: fixed;
}
.side-right {
    position: relative;
    left: 110px;
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
.btn.btn-primary {
    background-color: #3F81D7;
}
.btn.btn-secondary{
    background-color: #3F81D7;
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







