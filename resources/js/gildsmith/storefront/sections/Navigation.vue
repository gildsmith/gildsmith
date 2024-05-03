<script setup>
import {ProfileButton} from '@gildsmith/profile-client'
import {CartButton} from '@gildsmith/cart-client'
</script>

<template>
    <div class="navigationContainer">
        <RouterLink :to="{name: 'storefront.index'}" class="navigationLogo">STOREFRONT</RouterLink>
        <nav class="navigation">
            <a class="url" href="#">Home</a>
            <a class="url" href="#">Products</a>
            <a class="url" href="#">Rooms</a>
            <a class="url" href="#">Sale</a>
            <a class="url" href="#">New</a>
        </nav>
        <div class="flex-1"/>
        <CartButton/>
        <ProfileButton/>
    </div>
</template>

<style scoped>
.navigationContainer {
    @apply flex items-center justify-between m-auto p-4 gap-8 border-b;
}

.navigationLogo {
    @apply font-semibold;
}

.navigation {
    @apply flex gap-2;
}

.url {
    @apply px-4 py-2 font-medium;
}
</style>
