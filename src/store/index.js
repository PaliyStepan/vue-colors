import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        image: {
          first : "product_6.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 6000
      },
      {
        id: 2,
        image: {
          first : "product_1.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 4800
      },
      {
        id: 3,
        image: {
          first : "product_2.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 5290
      },
      {
        id: 4,
        image: {
          first : "product_3.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 2800
      },
      {
        id: 5,
        image: {
          first : "product_4.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 3400
      },
      {
        id: 6,
        image: {
          first : "product_5.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 4560
      },
      {
        id: 7,
        image: {
          first : "product_6.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 5555
      },
      {
        id: 8,
        image: {
          first : "product_7.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 6270
      },
      {
        id: 9,
        image: {
          first : "product_8.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 1200
      },
      {
        id: 10,
        image: {
          first : "product_9.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 6000
      },
      {
        id: 11,
        image: {
          first : "product_6.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 5100
      },
      {
        id: 12,
        image: {
          first : "product_7.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 4500
      },
      {
        id: 13,
        image: {
          first : "product_8.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 7800
      },
      {
        id: 14,
        image: {
          first : "product_9.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 9000
      },
      {
        id: 15,
        image: {
          first: "product_1.png",
          second : "product_hover.png"
        },
        name: "Краска Wallquest, Brownsone",
        article: "MS90102",
        price: 6666
      }

    ]
  },
  getters: {
    products(state) {
      return state.products
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
