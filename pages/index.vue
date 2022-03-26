<template>
    <div class="index_container">
        <NuxtLayout name="index">
            Hello world!
        </NuxtLayout>
    </div>
</template>

<style lang="scss">
.index_container {
    @apply bg-gradient-to-r from-yellow-200 via-green-200 to-green-300;
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>