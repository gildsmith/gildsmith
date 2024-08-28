<script setup>
import NotificationBar from '../components/NotificationBar.vue'
import LanguageSelect from '@gildsmith/storefront-client/src/widgets/LanguageSelect.vue'
import CartButton from '@gildsmith/cart-client/src/widgets/CartButton.vue'
import ProfileButton from '@gildsmith/profile-client/src/widgets/ProfileButton.vue'
</script>

<template>
    <NotificationBar/>
    <div class="navigationContainer">
        <a href="/" class="navigationLogo">GILDSMITH</a>
        <nav class="navigation">
            <a class="url" href="/#">Home</a>
            <a class="url" href="/#">Products</a>
            <a class="url" href="/#">Rooms</a>
            <a class="url" href="/#">Sale</a>
            <a class="url" href="/#">New</a>
        </nav>
        <div class="flex-1"/>
        <LanguageSelect/>
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
