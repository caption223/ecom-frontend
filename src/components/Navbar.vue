<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['open']);

const navigate = (to: string) => {
    router.push(to);
}

const profile = () => {
    router.push('/profile');
}

const settings = () => {
    router.push('/settings');
}

const login = () => {
    router.push('/login');
}

const registerPage = () => {
    router.push('/register');
}

const homePage = () => {
    router.push('/');
}

const open = () => {
    emit('open');
};

</script>

<template>
    <div class="navbar-container">

        <div>
            <i class="bar-icon" @click="open">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </i>
        </div>

        <div class="logo">
            <img src="src/assets/Missandei-Logo.png" @click="homePage">
        </div>

        <div class="search-container">
            <form>
                <input type="text" class="search-box" placeholder="Search" />
                <span class="icon">
                    <i>
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </i>
                </span>

            </form>
        </div>

        <div>
            <a>Sign in</a>
            <a>Create an account</a>
        </div>

        <div>
            <i>
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </i>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.navbar-container {
    display: flex;
    background-color: #ffffff;
    max-width: 100%;
    width: 100%;
    height: 60px;
    align-items: center;

    .bar-icon {
        cursor: pointer;
    }

    div {
        margin: 10px;
        padding: 20px;
    }

    .logo {
        cursor: pointer;
        width: 200px;
    }

    .search-container {

        .search-box {
            border-radius: 5px;
            width: 1080px;
            position: relative;
        }

        .icon {
            margin: 10px;
            position: absolute;
            cursor: pointer;
        }
    }

    a {
        margin: 10px;
        cursor: pointer;
    }
}
</style>