<template>
    <div class="page">
        <header>
            <router-link to="/vocamain"><i class="fa-solid fa-arrow-left fa-2x fa-pull-left"></i></router-link>
            <h3>
            즐겨찾기 단어
            </h3>
        </header>
        <nav>
            <main>
                <div class="vocas">
                    <div v-for="(bookmark, i) in bookmarks" :key="bookmark.i">
                        <div class="voca-item">
                            <div class="left-text">
                                <i class="far fa-star" :class="{ 'fas': bookmark.bookmarked }" @click="toggleBookmark(bookmark)"></i>
                                <strong class="voca-text">{{ bookmark.title }}
                                    <br>
                                    <div class="voca-mean">{{ bookmark.content }}</div>
                                </strong>
                            </div>
                        </div><hr>
                    </div>
                </div>
            </main>
        </nav>
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
import axios from 'axios';

export default {
    data() {
        return{
            notes: [],
            bookmarks: []
        }
    },
    created() {
        const token = localStorage["token"];
        if (!token) {
            console.error('Token not found');
            return;
        }
        axios({
            method: 'get',
            url: 'http://34.64.189.50/note/bookmark/view',
            headers: {
                Authorization: 'JWT ' + token,
            },
        })
        .then(response => {
            this.notes = response.data.results;
        })
        .catch(error => {
            console.error(error);
        });
    },
    methods: {
        toggleBookmark(note) {
            note.bookmarked = !note.bookmarked;
            if (note.bookmarked) {
                this.bookmarks.push(note);
            } else {
                const index = this.bookmarks.indexOf(note);
                this.bookmarks.splice(index, 1);
            }
        },
    },
    mounted() {
        const savedBookmarks = localStorage.getItem('bookmarks');
        if (savedBookmarks) {
            this.bookmarks = JSON.parse(savedBookmarks);
            this.bookmarks.forEach(bookmark => {
            const note = this.notes.find(n => n.id === bookmark.id);
            if (note) {
                note.bookmarked = true;
            }
            });
        }
    },
    watch: {
        bookmarks: {
            handler: function(bookmarks) {
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            },
            deep: true
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
.page header i {
    margin-left: 20px;
}
h3 {
    font-size: 15;
    margin-right:50px;
}
.fa-star {
    font-size: 20px;
    float: left;
    color: #ccc;
}

.fas {
    color: yellow;
}


.voca-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left-text {
    display: flex;
    align-items: center;
}
.voca-text {
    margin-left: 5px;
    text-align: left;
    font-size: 15px;
}
.voca-mean {
    font-size: 13px;
    color: #979797;
}
.voca-del {
    margin-left: auto;
    font-size: 11px;
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