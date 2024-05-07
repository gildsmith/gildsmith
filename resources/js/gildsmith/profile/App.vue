<script setup>
import Navigation from '../storefront/sections/Navigation.vue'
</script>

<template>
    <div class="customProfileContainer">
        <Navigation/>
        <RouterView/>
    </div>
</template>

<style scoped>
.customProfileContainer {
    @apply min-h-full;
}

</style>
