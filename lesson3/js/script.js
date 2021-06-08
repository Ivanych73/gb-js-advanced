const GOODS_ITEM_CLASS = 'goods-item';
const GOODS_LIST_CLASS = 'goods-list';
const ADD_BUTTON_CLASS = 'add-to-cart-button';
const REMOVE_BUTTON_CLASS = 'remove-from-cart-button';
const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

//класс корзины
class Cart {
  constructor() {
    this.goods = [];
    this.totalPrice = 0;
  }

  addGood(product) {
    //Если в корзине уже есть товар с таким id - увеличиваем количество
    if (this.getGoodById(product.id)) {
      this.getGoodById(product.id).quantity++;
    //если нет - просто добавляем товар
    } else {
      this.goods.push(product);
    }
    //Пересчитываем полную цену корзины
    this.countTotalPrice(product.price);
  }

  removeGood(product) {
    //Если в корзине нет товара с тавим id ничего не делаем
    let existingProduct = this.getGoodById(product.id);
    if (!existingProduct) {
      return
    //Иначе, если количество единиц товара больше 1 - уменьшаем количество
    } else {
      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
    //Либо, если такой товар только один удаляем из корзины совсем
      } else {
        this.goods.splice(this.goods.indexOf(existingProduct));
      }
      this.countTotalPrice(-product.price);
    }
  }

  //Получение списка товаров в корзине
  getGoods() {
    return this.goods;
  }

  //Поиск товара по id
  getGoodById(id) {
    for (let i = 0; i < this.goods.length; i++) {
      if (this.goods[i].id == id) {
        return this.goods[i];
      }
    }
  }
  //отрисовать корзину
  render() {

  }

  //посчитать полную стоимость корзины
  countTotalPrice(price) {
    this.totalPrice+=price;
  }

  //оформить заказ
  makeOrder() {

  }
}

//класс элемента корзины
class CartItem {
  constructor(title, price, id, quantity = 1) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.quantity = quantity;
  }

  //отрисовать элемент
  render() {

  }

  //добавить товар в корзину
  addToCart() {
    newCart.addGood(this);
  }

  //удалить товар из корзины
  removeFromCart() {
    newCart.removeGood(this);
  }
}

class GoodsItem {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
  render() {
    return `<div class="${GOODS_ITEM_CLASS}"><h3>${this.title}</h3><p>${this.price}</p>${this.renderAddToCartButton()}<br>${this.renderRemoveFromCartButton()}</div>`;
  }
  renderAddToCartButton() {
    return `<button class=${ADD_BUTTON_CLASS} type=button data-id=${this.id}>Добавить в корзину</button>`
  }
  renderRemoveFromCartButton() {
    return `<button class=${REMOVE_BUTTON_CLASS} type=button data-id=${this.id}>Удалить из корзины</button>`
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.totalPrice = 0;
  }

  async fetchGoods() {
    const responce = await fetch(`${API_URL}/catalogData.json`);
    if (responce.ok) {
      const catalogItems = await responce.json();
      this.goods = catalogItems;
    } else {
      alert("Ошибка при соединении с сервером");
    }
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(
        good.product_name,
        good.price,
        good.id_product
      );
      listHtml += goodItem.render();
    });
    document.querySelector(`.${GOODS_LIST_CLASS}`).innerHTML = listHtml;
  }

  getGoodById(id) {
    for (let i = 0; i < this.goods.length; i++) {
      if (this.goods[i].id_product == id) {
        return this.goods[i];
      }
    }
  }

}

function clickAddToCart() {
  const newItem = newGoodsList.getGoodById(this.dataset.id);
  const newCartItem = new CartItem(newItem.product_name, newItem.price, newItem.id_product);
  newCartItem.addToCart();
  console.log(newCart);
}

function clickRemoveFromCart() {
  const newItem = newGoodsList.getGoodById(this.dataset.id);
  const newCartItem = new CartItem(newItem.product_name, newItem.price, newItem.id_product);
  newCartItem.removeFromCart();
  console.log(newCart);
}

const init = async () => {
  //const newGoodsList = new GoodsList();
  await newGoodsList.fetchGoods();
  newGoodsList.render();
  let buttonsArr = document.querySelectorAll(`.${ADD_BUTTON_CLASS}`);
  buttonsArr.forEach(item => (item.addEventListener('click', clickAddToCart)));
  buttonsArr = document.querySelectorAll(`.${REMOVE_BUTTON_CLASS}`);
  buttonsArr.forEach(item => (item.addEventListener('click', clickRemoveFromCart)));
}

const newGoodsList = new GoodsList();
const newCart = new Cart();
window.onload = init;