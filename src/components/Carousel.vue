<script setup lang="ts">
import { ref, onMounted } from 'vue';

const currentSlide = ref(1);
const getSlideCount = ref();

const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
    } else {
        currentSlide.value += 1;
    }
};

const prevSlide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = 1;
    } else {
        currentSlide.value -= 1;
    }
};

onMounted(() => {
    getSlideCount.value = document.querySelectorAll(".slide").length;
});


</script>

<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />

        <div class="navigate">
            <div class="toggle-page left">
                <i class="slide-arrow" @click="prevSlide">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                </i>
            </div>
            <div class="toggle-page right">
                <i class="slide-arrow" @click="nextSlide">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    .toggle-page {
        display: flex;
        flex: 1;
    }

    .right {
        justify-content: flex-end;
    }

    .slide-arrow {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #6347c7;
        color: #fff;
    }
}
</style>