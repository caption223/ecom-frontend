<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const home = () => {
    router.push('/');
}

const about = () => {
    router.push('/about');
}

const profile = () => {
    router.push('/profile');
}
</script>

<template>
    <div class="nav">
        <ul>
            <li><a @click="home" class="logo">ECOM</a></li>
            <li><a @click="profile">Profile</a></li>
            <li><a @click="about">About</a></li>
            <li><a @click="home">Home</a></li>
        </ul>
    </div>
</template>