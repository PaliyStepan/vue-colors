<template lang="pug">
    .cart-item
        router-link(to="/").cart-item__link
            .cart-item__img
                img(:src=" require('../assets/img/products/' + product.image.first)")
            .cart-item__info
                .cart-item__name
                    | {{product.name}}
                .cart-item__price
                    | {{product.price}}
                    i &#8381;
        .cart-item__controls
            button.cart-item__control(@click="itemCartMinus(product.id)" :class="{disabled: product.quantity === 1}") -
            .cart-item__input {{product.quantity}}
            button.cart-item__control(@click="itemCartPlus(product.id)") +
        .cart-item__delete(@click="deleteFromCart(product.id)")
            img(src="../assets/img/close.svg")
</template>

<script>
    export default {
        name: "Cart-item",
        props: {
            product: Object,
            default() {
                return {}
            }
        },
        methods: {
            deleteFromCart(id){
                this.$store.dispatch('deleteFromCart',id)
            },
            itemCartMinus(id){
                this.$store.dispatch('itemCartMinus',id)
            },
            itemCartPlus(id){
                this.$store.dispatch('itemCartPlus',id)
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/Styles/vars";
    .cart-item{
        border-top: 1px solid rgba(#000, 0.1);
        display: flex;
        align-items: center;
        padding-top: 8px;
        margin-bottom: 14px;
        &__link {
            display: flex;
            text-decoration: none;
            color: $black;
            &:hover {
                text-decoration:  underline;
            }
        }
        &__img {
            width: 96px;
            margin-right: 8px;
            img {
                width: auto;
                max-width: 100%;
            }
        }
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 180px;
            padding-top: 16px;
        }
        &__name {
            margin-bottom: 16px;
            line-height: 18px;
        }
        &__price {
            margin-top: auto;
            font-weight: bold;
            i {
                font-style: normal;
                margin-left: 4px;
            }
        }
        &__controls {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: 40px;
        }
        &__control {
            width: 40px;
            height: 24px;
            background-color: $gray;
            color: $black;
            transition: all 0.2s ease;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: none;
            &.disabled{
                opacity: 0.3;
                pointer-events: none;
            }
            &:hover {
                background-color: $green;
            }
        }
        &__input {
            width: auto;
            min-width: 20px;
            text-align: center;
            margin: 0 15px;
        }
        &__delete {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover {
                img {
                    opacity: 1;
                }
            }
            img {
                opacity: 0.2;
                width: 12px;
                transition: all 0.2s ease;
            }
        }
    }


    @media only screen and (max-width: 575px){
        .cart-item {
            flex-wrap: wrap;
            position: relative;
            &__link {
                width: 100% ;
                margin-bottom: 20px;
                padding-right: 30px;
            }
            &__info {
                width: 100%;
            }
            &__controls {
                width: 100%;
                margin-left: 0;
                margin-right: 0;
                justify-content: center;
            }
            &__delete {
                position: absolute;
                top: 20px;
                right: 0;
            }
        }
    }

</style>
