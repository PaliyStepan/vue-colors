<template lang="pug">
    .catalog
        .bg-element(:class="{active : showFilters}" @click="handleFilters")
        .container
            .grid
                .grid__left(:class="{active : showFilters}")
                    aside.aside
                        .aside__trigger(v-show="showFilters" @click="handleFilters")
                        .products-filter
                            .products-filter__item
                                label.products-filter__label
                                    input(type="checkbox").products-filter__input
                                    .products-filter__checkbox
                                    .products-filter__text Новинки
                            .products-filter__item
                                label.products-filter__label
                                    input(type="checkbox").products-filter__input
                                    .products-filter__checkbox
                                    .products-filter__text Есть в наличии
                            .products-filter__item
                                label.products-filter__label
                                    input(type="checkbox").products-filter__input
                                    .products-filter__checkbox
                                    .products-filter__text Контрактные
                            .products-filter__item
                                label.products-filter__label
                                    input(type="checkbox").products-filter__input
                                    .products-filter__checkbox
                                    .products-filter__text Эксклюзивные
                            .products-filter__item
                                label.products-filter__label
                                    input(type="checkbox").products-filter__input
                                    .products-filter__checkbox
                                    .products-filter__text Распродажа
                .grid__right
                    .products-info
                        .products-info__left
                            .products-info__filter-trigger(@click="handleFilters")
                                | Фильтры
                            .products-info__amount
                                | 412 товаров
                        .products-info__right

                    .products-list
                        .products-list__col(v-for="product in products")
                            .products-list__item.product-item
                                a(href="/").product-item__link
                                    .product-item__img
                                        img(:src=" require('../assets/img/products/' + product.image.first)").product-item__img_main
                                        img(:src=" require('../assets/img/products/' + product.image.second)").product-item__img_hover
                                    .product-item__name
                                        | {{product.name}}
                                    .product-item__article
                                        | {{product.article}}
                                .product-item__footer
                                    .product-item__price
                                        .product-item__price--span
                                            | {{product.price}}
                                        i &#8381;
                                    .product-item__add
                                        .product-item__button
                                            img(src="../assets/img/plus.svg")


</template>

<script>
    import  {mapGetters} from "vuex";
    export default {
        name: "Products",
        data: ()=>({
            showFilters: false,
        }),
        computed: {
            ...mapGetters([
                'products'
            ])
        },
        methods: {
            handleFilters(){
                this.showFilters = !this.showFilters;
                let html = document.querySelector('html');

                if (!html.classList.contains('fixed')) {
                    html.classList.add('fixed')
                } else {
                    html.classList.remove('fixed')
                }
            }
        }
    }
</script>

<style lang="scss">

    @import "../assets/Styles/vars";
    .catalog {
        padding-top: 72px;
    }
    .grid{
        display: flex;
        &__left{
            width: 16.9%;
            min-width: 16.9%;
            padding-right: 25px;
        }
        &__right {
            width: calc(100% - 16.9%);
        }
    }
    .products-filter{
        &__item {
            margin-bottom: 5px;
        }
        &__label{
            display: inline-flex;
            position: relative;
            align-items: center;
            cursor: pointer;
        }
        &__input {
            width: 1px;
            height: 1px;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            &:checked ~ .products-filter__checkbox {
                background-color: $green;
                &:before {
                    left: 20px;
                }
            }
        }
        &__checkbox {
            width: 36px;
            height: 22px;
            background-color: $gray;
            -webkit-border-radius: 40px;
            -moz-border-radius: 40px;
            border-radius: 40px;
            position: relative;
            margin-right: 12px;
            transition: all 0.2s ease;
            &:before {
                content: '';
                position: absolute;
                width: 8px;
                height: 8px;
                background-color: $black;
                border-radius: 50%;
                top: 50%;
                transform: translateY(-50%);
                left: 7px;
                transition: all 0.2s ease;
            }
        }
        &__text {
            font-size: 12px;
            line-height: 12px;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }
    }

    .products-list{
        display: flex;
        margin: 0 -12px;
        flex-wrap: wrap;
        &__col {
            padding: 0 12px;
            width: 20%;
            min-width: 20%;
            margin-bottom: 16px;
        }
    }


    .product-item{
        padding-bottom: 14px;
        border-bottom: 1px solid rgba(#000, 0.1);
        &:hover {
            .product-item__button {
                opacity: 1;
                pointer-events: auto;
            }
        }
        &__link {
            display: block;
            color: $black;
            text-decoration: none;
            margin-bottom: 16px;
            &:hover {
                text-decoration: underline;
                .product-item__img_hover {
                    opacity: 1;
                }
            }
        }
        &__img {
            position: relative;
            padding-top: 100%;
            overflow: hidden;
            margin-bottom: 16px;
        }
        &__img_main {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: auto;
            max-width: 80%;

        }
        &__img_hover{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.2s ease;
            width: 100%;
            height: 100%;
            background-color: red;
            max-width: 100%;
        }
        &__name {
            line-height: 18px;
        }
        &__article{
            line-height: 16px;
        }
        &__footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__price {
            display: inline-flex;
            align-items: center;
            i {
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
            }
        }
        &__price--span {
            font-weight: 600;
            margin-right: 4px;
        }
        &__button {
            width: 80px;
            height: 32px;
            border-radius: 8px;
            background-color: $gray;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: 0;
            pointer-events: none;
            transition: all 0.2s ease;
            &:hover {
                background-color: $green;
            }
        }
    }


    .products-info{
        &__filter-trigger {
            display: none;
        }
    }

    .bg-element{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(#000, 0.7);
        opacity: 0;
        pointer-events: none;
        z-index: 40;
        transition: all 0.2s ease;
        &.active{
            opacity: 1;
            pointer-events: auto;
        }
    }




    @media only screen and (max-width: 1680px){
        .products-list{
            &__col {
                width: 25%;
            }
        }
    }
    @media only screen and (max-width: 1366px){
        .grid{
            &__left {
                min-width: 25%;
                width: 25%;
            }
            &__right {
                width: 75%;
                min-width: 75%;
            }
        }
        .products-list{
            &__col {
                width: 33%;
            }
        }
    }

    @media only screen and (max-width: 991px){
        .grid{
            position: relative;
            &__left{
                width: 100%;
                position: fixed;
                top: 100%;
                left: 0;
                bottom: 0;
                z-index: 45;
                overflow: auto;
                padding-right: 0;
                transition: top 0.3s ease-out;
                padding-top: 160px;
                pointer-events: none;
                &.active {
                    top: 0;
                }
            }
            &__right{
                width: 100%;
                min-width: auto;
            }
        }

        .aside {
            background-color: #fff;
            padding-right: 0;
            width: 100%;
            border-radius: 24px 24px 0px 0px;
            padding-top: 54px;
            padding-left: 24px;
            padding-right: 24px;
            height: 100%;
            pointer-events: auto;
            position: relative;
            &__trigger {
                position: absolute;
                width: 28px;
                height: 4px;
                background-color: rgba($black, 0.6);
                top: 12px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .product-item{
            &__button {
                opacity: 1;
                pointer-events: auto;
                width: 40px;
                height: 24px;
                background-color: $gray;
                border-radius: 6px;
                img {
                    width: 16px;
                }
            }
        }

        .products-info{
            &__filter-trigger {
                display: block;
            }
            &__amount {
                display: none;
            }
        }
    }
    @media only screen and (max-width: 767px){
        .products-list{
            &__col {
                width: 50%;
            }
        }
    }
    @media only screen and (max-width: 575px){
        .products-list{
            margin-left: -8px;
            margin-right: -8px;
            &__col {
                padding: 0 8px;
            }
        }
        .product-item{
            padding-bottom: 34px;
            &__link {
                margin-bottom: 20px;
            }
        }
    }

    @media only screen and (max-width: 374px){
        .product-item{
            &__name {
                font-size: 14px;
            }
            &__article{
                font-size: 14px;
            }
        }
    }
</style>
