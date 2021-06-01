const GOODS_ITEM_CLASS = 'goods-item';
const GOODS_LIST_CLASS = 'goods-list';

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
]

//Добавил аргументы по умолчанию
const renderGoodsItem = (title = 'название товара', price = 'цена товара') => {
  return `<div class=${GOODS_ITEM_CLASS}><h3>${title}</h3><p>${price}</p></div>`;
}

//Добавил аргументы по умолчанию и убрал вывод запятых
const renderGoodsList = (list = goods) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector(`.${GOODS_LIST_CLASS}`).innerHTML = goodsList.join('');
}

const init = () => {
  renderGoodsList();
}

window.onload = init;