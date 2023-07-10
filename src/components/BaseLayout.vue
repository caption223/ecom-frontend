<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import FooterVue from '@/components/Footer.vue';
import { ref } from 'vue';

const isMobileNavigationVisible = ref(false);
const isExpanded = ref(false);
const isHidden = ref(true);

const nav_toggle = () => {
    if (isMobileNavigationVisible.value === false) {
        isMobileNavigationVisible.value = true;
        isExpanded.value = true;
        isHidden.value = false;
    } else {
        isMobileNavigationVisible.value = false;
        isExpanded.value = false;
        isHidden.value = true;
    }
}
</script>

<template>
    <header class="base-header flex">
        <div class="header-logo" :aria-expanded="isExpanded">
            <h1>Missandei</h1>
        </div>
        <button @click="nav_toggle" class="mobile-nav-toggle display-none" aria-controls="base-navigation"
            :aria-expanded="isExpanded">
            <span class="sr-only">
                Menu
            </span>
        </button>
        <Navbar :isMobileNavigationVisible="isMobileNavigationVisible" :isHidden="isHidden" />
    </header>


    <main class="main">
        <slot />
    </main>

    <footer>
        <FooterVue />
    </footer>
</template>

<style lang="scss">
.main {
    background-color: #f8f7f7;
}
</style>