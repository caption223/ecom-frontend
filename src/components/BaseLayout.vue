<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <header>
        <Navbar />
    </header>

    <main class="content">
        <slot />
    </main>
</template>