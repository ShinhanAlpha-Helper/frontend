<template>
    <div class="page">
        <header style="margin-top: 30px; text-align: right;">
            <i class="fa-solid fa-magnifying-glass-plus fa-2x"></i>
            <i class="fa-solid fa-xmark fa-2x"></i>
        </header>
        <main>
            <!-- <iframe src="https://finance.naver.com/news/news_read.naver?article_id=0004813432&office_id=015&mode=LSS2D&type=0&section_id=101&section_id2=258&section_id3=&date=20230222&page=1" 
            frameborder="0" style="display: block; width: 375px; height: 600px"></iframe> -->
            <iframe :src="$route.query.url"
            frameborder="0" style="display: block; width: 375px; height: 600px"></iframe>
        </main>
        <footer>

        </footer>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {

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