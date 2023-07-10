<script lang="ts" setup></script>

<template>
    <div class="content">
        <div class="contact-section">
            <ul>
                <li>
                    <h1>Contact Details</h1>
                </li>
                <li>
                    <i><font-awesome-icon icon="phone" /></i>
                    <span>(+63) 956 xxx xxxx</span>
                </li>
                <li>
                    <i><font-awesome-icon icon="envelope" /></i>
                    <span>xxx@gmail.com</span>
                </li>
                <li>
                    <i><font-awesome-icon icon="location-dot" /></i>
                    <span>Quezon City, Philippines</span>
                </li>
            </ul>
        </div>
        <div class="socials">
            <ul>
                <li>
                    <h1>Social Network</h1>
                </li>
                <li>
                    <i class="fa-brands fa-facebook"></i>
                </li>
                <li>
                    <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                    <i class="fa-brands fa-twitter"></i>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    background-color: #3a3939;
    color: #f2f2f2;
    padding: 10px;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        h1 {
            font-size: 25px;
        }

        span {
            padding-left: 10px;
        }
    }

    .contact-section {
        margin: 10px;

        i {
            font-size: 20px;

        }
    }

    .socials {
        margin: 10px;
        justify-content: center;

        li {
            display: inline;

            i {
                padding: 10px;
                font-size: 25px;
            }
        }
    }
}
</style>