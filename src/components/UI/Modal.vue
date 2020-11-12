<template lang="pug">
    .modal(v-if="showCart")
        .modal__bg(@click="handleShow")
        transition(name="slide" appear)
            .modal__inner
                slot
                .modal__close(@click="handleShow")
                    img(src="../../assets/img/close.svg")
</template>

<script>
    export default {
        name: "Modal",
        props:{
            showCart: Boolean,
            default: false
        },
        methods: {
            handleShow(){
                this.$emit('changeShowCart')
            },
            checkVisible(){

                let html = document.querySelector('html');

                if (this.showCart) {
                    html.classList.add('fixed')
                } else {
                    html.classList.remove('fixed')
                }

            }
        },
        updated() {
            this.checkVisible();
        }
    }
</script>

<style lang="scss">
    .modal {
        position: fixed;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        &__inner {
            position: fixed;
            right: 0;
            top: 0;
            bottom: 0;
            width: 600px;
            background-color: #fff;
            min-height: 100vh;
            height: auto;
            padding: 40px;
            overflow: auto;
        }
        &__bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(#000, 0.7);
        }
        &__close {
            position: absolute;
            top: 32px;
            right: 40px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 1px solid rgba(#000, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            img {
                width: 12px;
            }
        }
    }

    .slide-enter{

    }

    .slide-enter-active{
        animation: slideIn 0.3s;
    }

    .slide-enter-to{

    }

    .slide-leave{

    }

    .slide-leave-active{
        animation: slideOut 0.3s;
    }

    .slide-leave-to{

    }

    @keyframes slideIn{
        from{transform: translateX(100%);}
        to{transform: translateX(0px);}
    }

    @keyframes slideOut{
        from{transform: translateX(0px);}
        to{transform: translateX(100%);}
    }


    @media only screen and (max-width: 767px){
        .modal {
            width: 100%;
            left: 0;
            &__inner {
                width: 100%;
            }
        }
    }
    @media only screen and (max-width: 575px){
        .modal {
            &__inner {
                padding: 40px 20px;
            }
        }
    }
</style>
