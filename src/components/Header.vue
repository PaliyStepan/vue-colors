<template lang="pug">
    header.header
        .container
            .header__inner
                .header__burger
                    .burger
                        .burger__line.burger__line_top
                        .burger__line.burger__line_center
                        .burger__line.burger__line_bottom
                .header__left
                    a.logo
                        img(src="../assets/img/logo.svg")
                .header__menu
                    nav.header__nav.nav
                        ul.nav__list
                            router-link.nav__item(v-for="link in links" tag="li" :to="link.url" active-class="nav__item_active")
                                a.nav__link(href="link.url")
                                    | {{link.title}}
                    .header__phone
                        a.header__phone--link(href="tel:84952217769")
                            | +7 (495) 221-77-69
                        .header__phone--text
                            | Заказать звонок
                    .header__info
                        .user-sec
                            .user-sec__item
                                router-link(to="/").user-sec__link
                                    img(src="../assets/img/search.svg").user-sec__img
                            .user-sec__item
                                router-link(to="/").user-sec__link
                                    img(src="../assets/img/profile.svg").user-sec__img
                            .user-sec__item
                                router-link(to="/").user-sec__link
                                    img(src="../assets/img/heart.svg").user-sec__img
                .header__cart
                    .header__cart--count 0


</template>

<script>
    export default {
        name: "Header",
        data:()=>({
            links: [
                {title: 'Продукты', url: '/products'},
                {title: 'Цвета', url: '/colors'},
                {title: 'Вдохновение', url: '/inspiration'},
                {title: 'Советы', url: '/advices'},
                {title: 'Найти магазин', url: '/find'},
            ],

        })
    }
</script>

<style lang="scss">
    @import "../assets/Styles/vars";

    .header {
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-top: 38px;
        padding-bottom: 40px;
        &__inner {
            display: flex;
            align-items: center;
        }
        &__burger {
            display: none;
        }
        &__left {
            width: 16.9%;
            min-width: 16.9%;
            padding-right: 15px;
        }
        &__menu {
            display: flex;
            align-items: center;
            flex-grow: 1;
            margin-right: 26px;
        }
        &__phone {
            margin-left: auto;
            margin-right: 116px;
        }
        &__phone--link {
            font-weight: 500;
            font-size: 16px;
            color: $black;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        &__phone--text {
            font-size: 14px;
            line-height: 14px;
            font-weight: 400;
            opacity: 0.3;
        }
        &__cart {
            margin-left: auto;
        }
        &__cart--count {
            display: flex;
            width: 24px;
            min-width: 24px;
            height: 24px;
            background-color: $green;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
    }

    .nav {
        &__list {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }
        &__item {
            margin-right: 22px;
            &:last-of-type {
                margin-right: 0;
            }
            &_active {
                a {
                    color: $green;
                }
            }
        }
        &__link {
            font-size: 14px;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.8px;
            &:hover{
                text-decoration: underline;
            }
            &:active{
                color: $black;
            }
        }
    }

    .user-sec {
        display: flex;
        &__item {
            margin-right: 24px;
            &:last-of-type {
                margin-right: 0;
            }
        }
        &__link {
            display: block;
        }
        &__img {
            width: 22px;
        }
    }


</style>
