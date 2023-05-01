<script setup lang="ts">
import Carousel from '@/components/Carousel.vue';
import Slide from '@/components/Slide.vue';

const carouselSlides = [
    {
        image: 'src/assets/pexels-francesco-ungaro-2325446.jpg'
    },
    {
        image: 'src/assets/pexels-pixabay-147411.jpg'
    },
    {
        image: 'src/assets/pexels-jaime-reimer-2662116.jpg'
    }
];

</script>

<template>
    <BaseLayout>
        <div>
            <Carousel class="carousel" v-slot="{ currentSlide }">
                <Slide v-for="(slide, index) in carouselSlides" :key="index">
                    <div v-show="currentSlide === index + 1" class="slide-info">
                        <img class="image-slide" :src="slide.image" alt="">
                    </div>
                </Slide>
            </Carousel>
        </div>

        <div>
            <h1>Features</h1>
        </div>
    </BaseLayout>
</template>

<style lang="scss" scoped>
.carousel {
    position: relative;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100vh;
    background-color: #ffa500;

    .slide-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;
        height: 100%;
    }

    .image-slide {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>