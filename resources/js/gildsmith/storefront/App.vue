<script setup>
import Navigation from './sections/Navigation.vue'
import Footer from './sections/Footer.vue'

/* ---------------------------------------------------------------------------
 * Custom Application Component
 * ---------------------------------------------------------------------------
 * TODO
 */
</script>

<template>
    <div class="appContainer">
        <div class="appNavigationContainer">
            <Navigation/>
        </div>
        <div class="routerViewContainer">
            <RouterView/>
        </div>
        <div class="appFooterContainer">
            <Footer/>
        </div>
    </div>
</template>

<style scoped>
.appContainer {
    @apply m-auto min-h-full flex flex-col;
}

.routerViewContainer {
    @apply flex-1;
}
</style>
