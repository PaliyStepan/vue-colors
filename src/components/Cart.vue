<template lang="pug">
    .cart
        .cart__header
            .cart__title Корзина
        .cart__inner(v-if="cart.length")
            .cart__body
                .cart__info
                    .cart__info--count {{cart.length}} товара
                    .cart__info--clear(@click="clearCart") очистить список
                .cart__items
                    cart-item(v-for="item in cart" :product="item" :key="item.id")
            .cart__footer
                .cart__amount
                    .cart__amount--span
                        | Итого
                    .cart__amount--count
                        | {{cartTotalCount | toLocalString}}
                        i &#8381;
                .cart__checkout
                    | Оформить заказ
        .cart__empty(v-else)
            h3  Ваша корзина пуста
</template>

<script>
    import CartItem from "../components/Cart-item";
    import {mapGetters} from "vuex";
    export default {
        name: "Cart",
        components: {
            CartItem
        },
        methods:{
          clearCart(){
              this.$store.dispatch('getCartClear');
          }
        },
        computed:{
            ...mapGetters([
                'cart'
            ]),
            cartTotalCount(){
                let result = [];
                if (this.cart.length) {
                    this.cart.forEach(item => {
                        result.push(item.price * item.quantity)
                    });
                    result = result.reduce((sum, el) => {
                        return sum + el
                    });

                    return result;
                }
            }
        },
        filters: {
            toLocalString(value) {
                return value.toLocaleString()
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/Styles/vars";
    .cart{
        padding-bottom: 140px;
        &__header {
            padding-right: 60px;
            margin-bottom: 90px;
        }
        &__title {
            font-weight: 500;
            font-size: 30px;
            letter-spacing: -0.04em;
        }
        &__info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        &__info--count{
            font-size: 14px;
            font-weight: 400;
        }
        &__info--clear{
            font-weight: 300;
            font-size: 14px;
            opacity: 0.4;
            cursor: pointer;
            transition: all 0.2s ease;
            &:hover {
                opacity: 1;
            }
        }
        &__footer {
            position: fixed;
            right: 0;
            bottom: 0;
            width: 600px;
            padding: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
        }
        &__checkout {
            width: 240px;
            height: 56px;
            background-color: $green;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            transition: all 0.2s ease;
            cursor: pointer;
            &:hover {
                background-color: $gray;
            }
        }
        &__amount--span {
            font-weight: 400;
            margin-bottom: 6px;
        }
        &__amount--count {
            font-weight: 500;
            font-size: 30px;
            i {
                font-style: normal;
                margin-left: 2px;
            }
        }
    }




    @media only screen and (max-width: 767px){
        .cart {
            &__footer {
                width: 100%;
            }
            &__header {
                margin-bottom: 50px;
            }
        }
    }


    @media only screen and (max-width: 575px){
        .cart {
            &__footer {
                display: block;
                padding: 25px;
            }
            &__amount {
                margin-bottom: 30px;
            }
            &__amount--span{
                font-size: 13px;
            }
            &__amount--count{
                font-size: 18px;
            }
            &__checkout {
                width: 100%;
            }
        }
    }
</style>
