<template lang="pug">
    .breadcrumbs
        .breadcrumbs__item
            router-link(to="/").breadcrumbs__link Главная
        .breadcrumbs__item
            router-link(to="/products").breadcrumbs__link Продукты
        .breadcrumbs__item
            router-link(to="/colors").breadcrumbs__link Краски
</template>

<script>
    export default {
        name: "Breadcrumbs"
    }
</script>

<style lang="scss">
    .breadcrumbs{
        position: absolute;
        top: 24px;
        left: 60px;
        z-index: 15;
        display: flex;
        align-items: center;
        &__item {
            margin-right: 19px;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: rgba(#fff, 0.3);
                top: 12px;
                right: -10px;
            }
            &:last-of-type {
                margin-right: 0;
                &:after {
                    display: none;
                }
            }
        }
        &__link {
            font-size: 10px;
            text-transform: uppercase;
            color: rgba(#fff, 0.3);
            letter-spacing: 0.06em;
            text-decoration: none;
            font-weight: 400;
            &:hover {
                text-decoration: underline;
            }
        }
    }


    @media only screen and (max-width: 575px){
        .breadcrumbs{
            margin-top: 10px;
            position: relative;
            top: 0;
            left: 0;
            padding-left: 24px;
            padding-right: 24px;
            margin-bottom: 30px;
            &__item {
                &:after {
                    background-color: rgba(#1F2020, 0.3);
                }
            }
            &__link {
                color: #1F2020;
                opacity: 0.3;
            }
        }
    }
</style>
