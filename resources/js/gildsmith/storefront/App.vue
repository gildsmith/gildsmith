<script setup>
import Navigation from "./sections/Navigation.vue";
import Footer from './sections/Footer.vue'
</script>

<template>
    <div class="appContainer">
        <div class="navigationContainer">
            <Navigation/>
        </div>
        <div class="routerViewContainer">
            <router-view/>
        </div>
        <div class="footerContainer">
            <Footer/>
        </div>
    </div>
</template>

<style scoped>
.appContainer {
    @apply container m-auto min-h-full flex flex-col;
}

.routerViewContainer {
    @apply flex-1 p-4;
}
</style>
