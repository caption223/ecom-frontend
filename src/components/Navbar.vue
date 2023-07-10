<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps(['isMobileNavigationVisible', 'isHidden']);

const navigations = [
    { path: '/about', name: 'About' },
    { path: '/register', name: 'Create account' },
    { path: '/login', name: 'Login' },
];
</script>

<template>
    <nav>
        <ul id="base-navigation" class="base-navigation flex" :data-visible="isMobileNavigationVisible">
            <li class="active" v-for="(navigation, index) in navigations" :key="index">
                <a>
                    <span aria-hidden="true">{{ index }}</span>{{ navigation.name }}
                </a>
            </li>
        </ul>
        <span class="mobile-naviigation-footer" :aria-hidden="isHidden">since
            2022</span>
    </nav>
</template>