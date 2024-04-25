<template>
    <div class="navigationContainer">
        <div class="navigationLogo">STOREFRONT</div>
        <nav class="navigation">
            <span class="url">Home</span>
            <span class="url">Products</span>
            <span class="url">Rooms</span>
            <span class="url">Sale</span>
            <span class="url">New</span>
        </nav>
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
    @apply px-4 py-2;
}
</style>
