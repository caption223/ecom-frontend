<script setup lang="ts">
import Carousel from '@/components/Carousel.vue';
import Slide from '@/components/Slide.vue';
import Feature from '@/components/ProductFeature.vue';
import { ref } from 'vue';

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

const featureProducts = [
    {
        title: 'product 1',
        code: 'A46',
        description: 'Waist Size: 26-28, length: 16',
        collection: 'Summer Collection',
        image_url: 'src/assets/p1.jpg'
    },
    {
        title: 'product 2',
        code: 'A45',
        description: 'Size: XS up to small',
        collection: 'Formal Collection',
        image_url: 'src/assets/p2.jpg'
    },
    {
        title: 'product 3',
        code: 'A4',
        description: 'Size: 27, Length: 29',
        collection: 'Trouser Collection',
        image_url: 'src/assets/p3.jpg'
    }
];

const isOpen = ref(true);

</script>

<template>
    <BaseLayout>
        <div class="">
            <Carousel class="carousel" v-slot="{ currentSlide }">
                <Slide v-for="(slide, index) in carouselSlides" :key="index">
                    <div v-show="currentSlide === index + 1" class="slide-info">
                        <img class="image-slide" :src="slide.image" alt="">
                    </div>
                </Slide>
            </Carousel>
        </div>

        <div class="product-features">
            <Feature v-for="featureProduct in featureProducts" :key="featureProduct.code" :product="featureProduct" />
        </div>
    </BaseLayout>
</template>

<style lang="scss" scoped>
.carousel {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 500px;
    background-color: #808080;

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

.parallax {
    background-attachment: fixed;
    // background-image: url("src/assets/pexels-francesco-ungaro-2325446.jpg");
    // min-height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    // background-size: cover;
}

.product-features {
    display: flex;
    max-width: 100%;
    padding: 25px;
    margin: 0 auto;
}
</style>