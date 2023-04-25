<script setup lang="ts">
import Carousel from '@/components/Carousel.vue';
import Slide from '@/components/Slide.vue';

const carouselSlides = ["bg-1", "bg-2", "bg-3"];

</script>

<template>
    <BaseLayout>
        <div>
            <Carousel class="carousel">
                <Slide v-for="(slide, index) in carouselSlides" :key="index">
                    <div class="slide-info">
                        <img :src="`@/assets/$(slide).jpg`" alt="">
                    </div>
                </Slide>
            </Carousel>
        </div>

        <div>
            <div class="text-3xl font-bold underline">
                Features
            </div>
        </div>
    </BaseLayout>
</template>

<style lang="scss" scoped>
.carousel {
    position: relative;
    max-height: 450px;
    max-width: 100%;
    width: 100%;
    height: 450px;
    background-color: orange;

    .slide-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;
        height: 100%;
    }

    img {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>