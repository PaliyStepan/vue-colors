<template lang="pug">
    #app
        modal(:showCart="showCart" @changeShowCart="toggleCart")
            cart
        app-header(@changeShowCart="toggleCart")
        .wrapper
            main.main
                router-view
            app-footer
</template>

<script>
    import AppHeader from "./components/Header";
    import Cart from "./components/Cart";
    import Modal from "./components/UI/Modal";
    import {mapActions} from "vuex";
    import AppFooter from "./components/Footer";

    export default {

    name: 'App',
    components: {
        AppHeader, Cart, Modal, AppFooter
    },
    data: ()=>({
        showCart: false
    }),
    methods: {
      ...mapActions([
          'getProducts'
      ]),
        toggleCart(){
          this.showCart = !this.showCart;
        }
    },
    mounted() {

        let products = [
            {
                id: 1,
                image: {
                    first : "product_6.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                article: "",
                price: 6000,
                popular: 3,
                date: '1996-03-30',
                available: true,
                new: true,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 2,
                image: {
                    first : "product_1.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 4800,
                popular: 4,
                date: '2020-05-19',
                available: false,
                new: false,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 3,
                image: {
                    first : "product_2.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 5290,
                popular: 1,
                date: '2010-01-01',
                available: true,
                new: false,
                sale: true,
                contract: false,
                exclusive: true,
                quantity: 0
            },
            {
                id: 4,
                image: {
                    first : "product_3.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 2800,
                popular: 4,
                date: '2018-12-31',
                available: false,
                new: true,
                sale: false,
                contract: false,
                exclusive: false,
                quantity: 0
            },
            {
                id: 5,
                image: {
                    first : "product_4.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 3400,
                popular: 5,
                date: '2000-04-03',
                available: true,
                new: false,
                sale: false,
                contract: true,
                exclusive: false,
                quantity: 0
            },
            {
                id: 6,
                image: {
                    first : "product_5.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 4560,
                popular: 5,
                date: '2019-11-19',
                available: false,
                new: true,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 7,
                image: {
                    first : "product_6.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 5555,
                popular: 1,
                date: '1999-08-09',
                available: true,
                new: false,
                sale: false,
                contract: false,
                exclusive: true,
                quantity: 0
            },
            {
                id: 8,
                image: {
                    first : "product_7.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 6270,
                popular: 4,
                date: '2005-03-11',
                available: true,
                new: true,
                sale: false,
                contract: true,
                exclusive: false,
                quantity: 0
            },
            {
                id: 9,
                image: {
                    first : "product_8.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 1200,
                popular: 2,
                date: '2024-04-01',
                available: true,
                new: true,
                sale: true,
                contract: false,
                exclusive: false,
                quantity: 0
            },
            {
                id: 10,
                image: {
                    first : "product_9.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 6000,
                popular: 3,
                date: '2010-05-19',
                available: false,
                new: false,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 11,
                image: {
                    first : "product_6.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 5100,
                popular: 1,
                date: '2020-05-19',
                available: true,
                new: true,
                sale: true,
                contract: true,
                exclusive: false,
                quantity: 0
            },
            {
                id: 12,
                image: {
                    first : "product_7.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 4500,
                popular: 1,
                date: '2011-05-19',
                available: true,
                new: true,
                sale: false,
                contract: false,
                exclusive: true,
                quantity: 0
            },
            {
                id: 13,
                image: {
                    first : "product_8.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 7800,
                popular: 2,
                date: '2021-05-17',
                available: false,
                new: false,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 14,
                image: {
                    first : "product_9.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 9000,
                popular: 5,
                date: '2020-04-10',
                available: true,
                new: true,
                sale: false,
                contract: false,
                exclusive: false,
                quantity: 0
            },
            {
                id: 15,
                image: {
                    first: "product_1.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 6666,
                popular: 4,
                date: '2003-02-11',
                available: true,
                new: true,
                sale: true,
                contract: true,
                exclusive: false,
                quantity: 0
            },
            {
                id: 16,
                image: {
                    first : "product_6.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                article: "",
                price: 6500,
                popular: 4,
                date: '1991-03-30',
                available: true,
                new: true,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 17,
                image: {
                    first : "product_4.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 4301,
                popular: 4,
                date: '2021-05-19',
                available: false,
                new: false,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 18,
                image: {
                    first : "product_1.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 4517,
                popular: 1,
                date: '2017-01-10',
                available: true,
                new: false,
                sale: true,
                contract: false,
                exclusive: true,
                quantity: 0
            },
            {
                id: 19,
                image: {
                    first : "product_5.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 7850,
                popular: 2,
                date: '2014-11-31',
                available: false,
                new: true,
                sale: false,
                contract: false,
                exclusive: false,
                quantity: 0
            },
            {
                id: 20,
                image: {
                    first : "product_4.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 3400,
                popular: 5,
                date: '2000-04-03',
                available: true,
                new: false,
                sale: false,
                contract: true,
                exclusive: false,
                quantity: 0
            },
            {
                id: 21,
                image: {
                    first : "product_5.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 4687,
                popular: 3,
                date: '2010-10-19',
                available: false,
                new: true,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 21,
                image: {
                    first : "product_6.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 6650,
                popular: 5,
                date: '1996-08-09',
                available: true,
                new: false,
                sale: false,
                contract: false,
                exclusive: true,
                quantity: 0
            },
            {
                id: 22,
                image: {
                    first : "product_7.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 9988,
                popular: 1,
                date: '2015-03-11',
                available: true,
                new: true,
                sale: false,
                contract: true,
                exclusive: false,
                quantity: 0
            },
            {
                id: 23,
                image: {
                    first : "product_8.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 1300,
                popular: 2,
                date: '2010-07-01',
                available: true,
                new: true,
                sale: true,
                contract: false,
                exclusive: false,
                quantity: 0
            },
            {
                id: 24,
                image: {
                    first : "product_9.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 7150,
                popular: 2,
                date: '2011-03-19',
                available: false,
                new: false,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 25,
                image: {
                    first : "product_6.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 5850,
                popular: 1,
                date: '2013-06-11',
                available: true,
                new: true,
                sale: true,
                contract: true,
                exclusive: false,
                quantity: 0
            },
            {
                id: 26,
                image: {
                    first : "product_7.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 3200,
                popular: 2,
                date: '2014-07-14',
                available: true,
                new: true,
                sale: false,
                contract: false,
                exclusive: true,
                quantity: 0
            },
            {
                id: 27,
                image: {
                    first : "product_8.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 1420,
                popular: 3,
                date: '2020-01-17',
                available: false,
                new: false,
                sale: false,
                contract: true,
                exclusive: true,
                quantity: 0
            },
            {
                id: 28,
                image: {
                    first : "product_9.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 9150,
                popular: 4,
                date: '2021-01-10',
                available: true,
                new: true,
                sale: false,
                contract: false,
                exclusive: false,
                quantity: 0
            },
            {
                id: 29,
                image: {
                    first: "product_1.png",
                    second : "product_hover.png"
                },
                name: "Краска Wallquest, Brownsone MS90102",
                price: 6666,
                popular: 5,
                date: '2000-02-11',
                available: false,
                new: true,
                sale: false,
                contract: true,
                exclusive: false,
                quantity: 0
            }
        ];
        this.$store.dispatch('getProducts', products);
    }
}
</script>

<style lang="scss">
    @import "~normalize.css";
    @import "assets/Styles/main";
</style>
