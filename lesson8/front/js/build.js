(()=>{"use strict";Vue.component("search-goods",{props:["filtergoods"],template:'\n      <div>\n        <input type="text" class="goods-search" v-model="searchStr" @keyup="applyFilter">\n        <button class="search-button header__button" type="button" @click="applyFilter">Искать</button>\n      </div>\n    ',data:function(){return{searchStr:""}},methods:{applyFilter(){this.filtergoods(this.searchStr)}}}),Vue.component("goods-item",{props:["good","rendercart"],template:"\n        <div class=\"goods-item\">\n          <h3>{{good.title}}</h3>\n          <h4>{{good.price}}</h4>\n          <button @click='addToCart'>Добавить в корзину</button>\n        </div>\n      ",methods:{async addToCart(){await fetch("http://localhost:3000/addToCart",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({title:this.good.title,price:this.good.price,id:this.good.id,quantity:1})}),this.rendercart()}}}),Vue.component("goods-list",{props:["goods","servererrorvisible","rendercart"],template:'\n      <div class="goods-list">\n        <goods-item v-for="good in goods" :key="good.id" :good="good" :rendercart="renderCart"></goods-item>\n        <server-error :visible="servererrorvisible"></server-error>\n        <search-error v-if="!servererrorvisible" :goods="goods"></search-error>\n      </div>\n      ',methods:{renderCart(){this.rendercart()}}}),Vue.component("server-error",{props:["visible"],template:'\n      <div v-if="visible">\n        <p>Не удается получить спиок товаров с сервера! Возможно сервер сейчас недоступен, либо чересчур перегружен, либо возникли проблемы с интернет-подключением!</p>\n      </div>\n    '}),Vue.component("search-error",{props:["goods"],template:'\n      <div v-if="goods.length===0">\n        <p>По Вашему запросу ничего не найдено!</p>\n      </div>\n    '});const t="http://localhost:3000";Vue.component("cart-item",{props:["good","rendercart"],template:"\n      <li class=\"cart__item\">\n        <p>{{good.title}}</p>\n        <p>{{good.price}}</p>\n        <p>Количество: {{good.quantity}}</p>\n        <button @click='addToCart'>+</button>\n        <button @click='removeFromCart'>-</button>\n      </li>\n    ",methods:{async addToCart(){await fetch(`${t}/addToCart`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.good)}),await this.rendercart()},async removeFromCart(){await fetch(`${t}/removeFromCart`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.good)}),await this.rendercart()}}}),Vue.component("cart-div",{props:[],data:function(){return{goods:[],isVisibleCart:!1,totalPrice:0}},template:'\n      <div class="cart" v-if="isVisibleCart">\n        <h2>Корзина</h2>\n        <ul class="cart__list">\n          <cart-item v-for="good in goods" :key="good.id" :good="good" :rendercart="renderCart"></cart-item>\n        </ul>\n        <p>Полная стомость всех товаров в корзине {{totalPrice}}</p>\n      </div>\n      ',methods:{async renderCart(){const t=await fetch("http://localhost:3000/cartData");if(t.ok){const o=await t.json();this.goods=o;let e=0;o.forEach((t=>{e+=t.price*t.quantity})),this.totalPrice=e,0!=e&&(this.isVisibleCart=!0)}}},async mounted(){await this.renderCart()}}),new Vue({el:"#app",data:{goods:[],filteredGoods:[],serverErrorVisible:!1},methods:{async getProducts(){const t=await fetch("http://localhost:3000/catalogData").catch((t=>{t&&(this.serverErrorVisible=!0)}));t.ok?((await t.json()).forEach((t=>{this.goods.push({title:t.product_name,price:t.price,id:t.id_product})})),this.filteredGoods=this.goods):this.serverErrorVisible=!0},filterGoods(t){const o=new RegExp(t,"i");this.filteredGoods=this.goods.filter((t=>o.test(t.title)))},async renderCart(){await this.$refs.cart.renderCart()}},async mounted(){await this.getProducts()}})})();