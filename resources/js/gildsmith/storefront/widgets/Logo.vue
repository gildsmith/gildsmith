<script setup>
import {IconSparkles} from '@tabler/icons-vue'
</script>

<template>
    <div class="logoContainer">
        <IconSparkles size="24" stroke="1.5"/>
        <span class="logoText">STOREFRONT</span>
    </div>
</template>

<style scoped>
.logoContainer {
    @apply flex gap-2 items-center justify-center;
}

.logoText {
    @apply font-medium text-lg;
}
</style>
