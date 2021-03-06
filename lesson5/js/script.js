const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: '',
    cart: {
      isVisibleCart: true,
      goods: [{title: 'Монитор', price: 8000, quantity: 1}],
    }
  },
  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },
    filterGoods() {
      const regExp = new RegExp(this.searchLine, 'i')
      this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name))
    },
    toggleCart() {
      if(this.cart.isVisibleCart) this.cart.isVisibleCart = false
      else this.cart.isVisibleCart = true;
    }
  },
  async mounted() {
    await this.getProducts();
  }
});