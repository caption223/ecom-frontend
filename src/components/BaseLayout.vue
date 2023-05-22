<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <header class="header">
        <Navbar />
    </header>

    <main class="main">
        <slot />
    </main>

    <footer>
        footer
    </footer>
</template>

<style lang="scss">
.main {
    background-color: #f8f7f7;
}
</style>