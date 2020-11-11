<template lang="pug">
    .catalog
        //.bg-element(:class="{active : showFilters}" @click="handleFilters")
        .container
            .grid
                .grid__left(:class="{active : showFilters}")
                    aside.aside
                        .aside__trigger(v-show="showFilters" @click="handleFilters")
                        .products-filter
                            form.form(@change="sortByCategories")
                                .products-filter__item
                                    label.products-filter__label
                                        input(value="new" type="checkbox" v-model="categories").products-filter__input
                                        .products-filter__checkbox
                                        .products-filter__text Новинки
                                .products-filter__item
                                    label.products-filter__label
                                        input(value="available" type="checkbox" v-model="categories").products-filter__input
                                        .products-filter__checkbox
                                        .products-filter__text Есть в наличии
                                .products-filter__item
                                    label.products-filter__label
                                        input(value="contract" type="checkbox" v-model="categories").products-filter__input
                                        .products-filter__checkbox
                                        .products-filter__text Контрактные
                                .products-filter__item
                                    label.products-filter__label
                                        input(value="exclusive" type="checkbox" v-model="categories").products-filter__input
                                        .products-filter__checkbox
                                        .products-filter__text Эксклюзивные
                                .products-filter__item
                                    label.products-filter__label
                                        input(value="sale" type="checkbox" v-model="categories").products-filter__input
                                        .products-filter__checkbox
                                        .products-filter__text Распродажа
                .grid__right
                    .bg-element(:class="{active : showFilters}" @click="handleFilters")
                    loader(v-show="isLoad")
                    .products-wrap(v-show="!isLoad")
                        .products-info
                            .products-info__left
                                .products-info__filter-trigger(@click="handleFilters")
                                    | Фильтры
                                .products-info__amount
                                    | {{sortedProducts.length}} товаров
                            .products-info__right
                                v-select(:options="options" :selected="selected.name" @select="setFilters" @showBg="handleFilters" )
                        .products-list
                            .products-list__col(v-for="product in sortedProducts")
                                .products-list__item.product-item(
                                    :class="{'product-item__empty': !product.available, 'product-item__sale': product.sale}"
                                    )
                                    router-link(:to="'/product/'+ product.id").product-item__link
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
                                            .product-item__button(@click="addToCart(product)")
                                                img(src="../assets/img/plus.svg")
                                    .product-item__more
                                        .product-item__rating
                                            rating(:rate="product.popular")
                                        .product-item__date {{product.date}}
                                        .product-item__incart(v-if="product.quantity > 0")
                                            | В корзине {{product.quantity}} шт.


</template>

<script>
    import  {mapGetters} from "vuex";
    import vSelect from "./UI/Select";
    import Loader from "./UI/Loader";
    import Rating from "./UI/Rating";
    export default {
        name: "Products",
        components: {
            vSelect,Loader,Rating
        },
        data: ()=>({
            showFilters: false,
            showMobileSorted: false,
            options: [
                {name: 'Сначала дорогие', type: 'price', order: 'desc'},
                {name: 'Сначала недорогие', type: 'price', order: 'asc'},
                {name: 'Сначала популярные', type: 'popular',order: 'desc'},
                {name: 'Сначала новые', type: 'date',order: 'desc'}
            ],
            selected: {name: 'Сначала дорогие', type: 'price', order: 'desc'},
            residualProducts: [],
            categories: []
        }),

        computed: {
            ...mapGetters([
                'products',
                'isLoad',
            ]),
            sortedProducts(){
                if (this.residualProducts.length) {
                    return this.residualProducts
                } else {
                    return this.products
                }
            }
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
            },
            setFilters(category){
                this.selected = category;
                this.changeFilters();
            },
            changeFilters(){
                if (this.selected.type == "price") {
                    this.sortedProducts.sort((a,b)=> a.price - b.price);
                    if (this.selected.order == "desc") {
                        this.sortedProducts.reverse();
                    }
                }
                if (this.selected.type == "popular") {
                    this.sortedProducts.sort((a,b)=> a.popular - b.popular);
                    this.sortedProducts.reverse();
                }
                if (this.selected.type == "date") {
                    this.sortedProducts.sort((a,b)=> a.date.localeCompare(b.date));
                    this.sortedProducts.reverse();
                }
            },
            sortByCategories(){
                let newArray = [];
                 newArray = this.products.filter(item=>{
                    let check = 0;
                    this.categories.forEach(obj => {
                        if (item[obj] === true) {
                            check++
                        }
                    });
                    if ( this.categories.length === check) {
                         return true
                     }
                });
                this.residualProducts = newArray;
                this.changeFilters();
            },
            addToCart(product){
                this.$store.dispatch('addToCart', product)
            }
        },
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

    .products-wrap{
        margin-top: -5px;
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
        overflow: hidden;
        &__sale {
            position: relative;
            &:before {
                content: 'Sale';
                position: absolute;
                pointer-events: none;
                z-index: 2;
                top: -10px;
                left: -55px;
                width: 150px;
                height: 60px;
                background-color: $green;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: rotate(-45deg);
                padding-top: 15px;
                font-size: 14px;
            }
        }
        &__empty {
            position: relative;
            .product-item__button {
                opacity: 0 !important;
                pointer-events: none !important;
            }
            &:before {
                pointer-events: none;
                content: 'Временно нет';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: rgba(#fff, 0.9);
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #000;
                font-size: 14px;
                font-weight: bold;
            }
        }
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
            margin-bottom: 15px;
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
        &__more {
            position: relative;
        }
        &__incart{
            position: absolute;
            top: -5px;
            right: 0;
            font-size: 13px;
        }
    }


    .products-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 40px;
        &__amount{
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 0.06em;
        }
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
                font-size: 12px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.06em;
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
            &__incart{
                top: auto;
                bottom: -22px;
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
