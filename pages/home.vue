<!--template>
    <div class="max-w-sm mx-auto mt-4">
        <div class="flex items-center">
            <img
                class="w-40 h-40 rounded-full mb-4"
                height="160"
                width="160"
                src="https://i.loli.net/2021/03/13/RSLyWDlwuci1atf.jpg"
                alt="ElaBosak233"
            />
            <a
                target="blank"
                class="ml-4 text-green-900 dark:text-green-400 font-bold"
                href="https://github.com/ElaBosak233"
            >Follow Me Github</a>
        </div>
        <ul role="list" class="mt-10 space-y-4">
            <li v-for="item in lists" :key="item.id">
                <NuxtLink class="py-4 hover:shadow-xl global-text" :to="item.url">
                    <div
                        class="flex items-center justify-between space-x-3 bg-gray-300 dark:bg-gray-700 rounded-lg p-4"
                    >
                        {{ item.title }}
                        <ArrowNarrowRightIcon class="h-6 w-6 global-text" aria-hidden="true" />
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template-->

<template>
    <div class="home_container">
        <div>等待</div>

        <div class="cards-list">
            <div class="card shadow-lg hover:shadow-2xl">
                <div class="card_image">
                    <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
                </div>
                <div class="card_title title-white">
                    接口
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
        const route = useRoute();
        const router = useRouter();
        useMeta({
            title: "首页 - 埃拉の柚子"
        });
        const lists = ref<links[]>([
            { id: 1, title: 'Pinia Store', url: 'pinia' },
            { id: 1, title: 'Modal', url: 'modal' },
            { id: 1, title: 'Menu', url: 'menu' },
            { id: 1, title: 'New soon...', url: '' },
        ])
        return {
            lists
        }
    }
}
</script>

<style scoped>
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

<style lang="scss">
.home_container {
    @apply bg-gradient-to-r from-rose-100 to-teal-100;
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>