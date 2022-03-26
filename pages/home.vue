<template>
    <div class="home_container">
        <div>等待</div>

        <div class="cards-list">

            <div class="card shadow-lg hover:shadow-2xl" onclick="javascrtpt:window.location.href='/api'">
                <div class="card_image">
                    <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
                </div>
                <div class="card_title title-white">
                    接口
                </div>
            </div>

            <NuxtLink class="card shadow-lg hover:shadow-2xl" to="elink">
                <div class="card_image">
                    <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
                </div>
                <div class="card_title text-sky-400 hover:text-yellow-400">
                    eLink
                </div>
            </NuxtLink>

            <div class="card shadow-lg hover:shadow-2xl">
                <div class="card_image">
                    <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
                </div>
                <div class="card_title text-gray-300">
                    等待..
                </div>
            </div>

            <div class="card shadow-lg hover:shadow-2xl">
                <div class="card_image">
                    <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
                </div>
                <div class="card_title text-sky-400 hover:text-yellow-400">
                    eLink
                </div>
            </div>

            <div class="card shadow-lg hover:shadow-2xl">
                <div class="card_image">
                    <img src="https://media2.giphy.com/media/iKlVVfabgroEE/giphy.gif" />
                </div>
                <div class="card_title text-sky-400 hover:text-yellow-400">
                    eLink
                </div>
            </div>

        </div>
    </div>
</template>


<script lang="ts">
import { ArrowNarrowRightIcon } from "@heroicons/vue/outline/index.js";

interface links {
    id: number
    title: string
    url: any
}

export default {
    layout: "default",
    components: {
        ArrowNarrowRightIcon
    },
    created: () => {
        const route = useRoute();
        const router = useRouter();
        if (route.hash == "#refresh") {
            router.replace("/home");
            window.location.reload();
        }
    },
    setup() {
        useMeta({
            title: "首页 - 埃拉の柚子"
        });
    }
}
</script>

<style lang="scss">
.home_container {
    @apply bg-gradient-to-r from-rose-100 to-teal-100;
    height: 100%;
    width: 100%;
    position: absolute;
}

.cards-list {
    z-index: 0;
    width: 64%;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
}

.card {
    margin: 30px auto;
    width: 130px;
    height: 130px;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.4s;
}

.card .card_image {
    width: inherit;
    height: inherit;
    border-radius: 30px;
}

.card .card_image img {
    width: inherit;
    height: inherit;
    border-radius: 30px;
    object-fit: cover;
}

.card .card_title {
    text-align: center;
    border-radius: 0px 0px 40px 40px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin-top: -80px;
    height: 40px;
}

.card:hover {
    transform: scale(0.9, 0.9);
}

.title-white {
    color: white;
}

.title-black {
    color: black;
}

@media all and (max-width: 500px) {
    .card-list {
        /* On small screens, we are no longer using row direction but column */
        flex-direction: column;
    }
}
</style>