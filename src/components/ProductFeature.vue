<script setup lang="ts">
const props = defineProps(['product']);
</script>

<template>
    <div class="card">
        <div class="card-inner">
            <div class="card-image">
                <img :src="props.product.image_url" />
            </div>
            <div class="card-detail">
                <h2>{{ props.product.title }}</h2>
                <p>{{ props.product.description }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    width: 100%;
    padding: 25px;

    .card-inner {
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
        background-color: #fff;

        .card-image {
            img {
                width: 300px;
                height: 300px;
            }
        }

        .card-detail {
            padding: 25px;
            margin: 0px -25px -25px;
        }

        .card-detail h2 {
            font-size: 24px;
            font-weight: 700;
            color: #676767;
            margin-bottom: 15px;
        }

        .card-detail p {
            font-size: 14px;
            line-height: 1.5;
            font-weight: 300;
            color: #676767;
        }
    }
}
</style>