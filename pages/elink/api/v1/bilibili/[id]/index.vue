<template>{{ title }}</template>

<script setup lang="ts">
import axios from "axios";
import cheerio from "cheerio";

const route = useRoute();

let title = "";

// axios.get(`https://live.bilibili.com/${route.params.id}`).then((response: any) => {
//   let $ = cheerio.load(response.data);
//   title = $("div[class=text live-skin-main-text title-length-limit small-title]").text();
// });
</script>
