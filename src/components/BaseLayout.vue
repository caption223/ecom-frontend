<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <header class="header">
        <Navbar />
    </header>

    <main>
        <slot />
    </main>
</template>