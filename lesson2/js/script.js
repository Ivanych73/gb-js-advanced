const GOODS_ITEM_CLASS = 'goods-item';
const GOODS_LIST_CLASS = 'goods-list';

//класс корзины
class cart {

  //возможные методы - отрисовать корзину
  render() {

  }

  //посчитать полную стоимость корзины
  countTotalPrice() {

  }

  //оформить заказ
  makeOrder() {

  }
}

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

//класс элемента корзины
class cartItem {

  //возможные методы 

  //Нарисовть объект
  render() {

  }
  //добавить товар в корзину
  addToCart() {

  }

  //удалить товар из корзины
  removeformCart() {

  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.totalPrice = 0;
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  countTotalPrice() {
    //Подсчет полной цены корзины. Думаю, что логичнее полную цену записывать как свойство
    //Метод можно вызывать, например, при добавлении товара
    this.goods.forEach(item => { this.totalPrice += parseInt(item.price) }, this);
  }
}
const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
]

const renderGoodsItem = (title = 'название товара', price = 'цена товара') => {
  return `<div class=${GOODS_ITEM_CLASS}><h3>${title}</h3><p>${price}</p></div>`;
}

const renderGoodsList = (list = goods) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector(`.${GOODS_LIST_CLASS}`).innerHTML = goodsList.join('');
}

const init = () => {
  renderGoodsList();
  const gl = new GoodsList;
  gl.fetchGoods();
  gl.countTotalPrice();
  document.querySelector('.cart-total-price').innerHTML = `Полная стоимость товаров в корзине - ${gl.totalPrice}`;
}

window.onload = init;