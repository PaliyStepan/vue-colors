<template lang="pug">
    .slider
        swiper.swiper(:options='swiperOption')
            swiper-slide
                //.slider__item(:style="{'background-image': `url(${require('../assets/img/slide.png')})`}")
                .slider__item
                    img.slider__img(src="../assets/img/slide.png")
                    .slider__item--title Краски
                    .slider__item--desc
                        p
                        | Идеально подходят
                        | для стен и других поверхностей.
                        br
                        |  Найди свой идеальный цвет!
            swiper-slide
                .slider__item(:style="{'background-image': `url(${require('../assets/img/slide.png')})`}")
                    .slider__item--title Краски
                    .slider__item--desc
                        p
                        | Идеально подходят
                        | для стен и других поверхностей.
                        br
                        |  Найди свой идеальный цвет!
            swiper-slide
                .slider__item(:style="{'background-image': `url(${require('../assets/img/slide.png')})`}")
                    .slider__item--title Краски
                    .slider__item--desc
                        p
                        | Идеально подходят
                        | для стен и других поверхностей.
                        br
                        |  Найди свой идеальный цвет!
            swiper-slide
                .slider__item(:style="{'background-image': `url(${require('../assets/img/slide.png')})`}")
                    .slider__item--title Краски
                    .slider__item--desc
                        p
                        | Идеально подходят
                        | для стен и других поверхностей.
                        br
                        |  Найди свой идеальный цвет!

            .swiper-pagination(slot='pagination')
            .swiper-button-prev(slot='button-prev')
            .swiper-button-next(slot='button-next')

</template>

<script>
    import img from "../assets/img/slide.png"
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';
    export default {
        name: "Slider",
        components: {
            Swiper,
            SwiperSlide
        },
        data: ()=> ({
            img : img,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },

            }
        })
    }
</script>

<style lang="scss">
    .slider {
        &__item {
            min-height: 500px;
            text-align: center;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 30px 15px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: relative;
            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }
        &__item--title{
            font-size: 72px;
            line-height: 63px;
            margin-bottom: 24px;
        }
        &__item--desc{
            line-height: 21px;
        }
    }
    @media only screen and (max-width: 1199px){
        .slider {
            &__item {
                min-height: auto;
                padding-top: 100px;
                padding-bottom: 120px;
                background-position: left center;
            }
            &__item--title{
                font-size: 40px;
                margin-bottom: 10px;
            }
            &__item--desc{
                font-size: 14px;
            }
        }
    }



</style>
