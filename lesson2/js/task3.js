class Hamburger {
    constructor(size, stuffing) { 
        this.size = size;
        this.stuffing = stuffing; 
        this.toppings = [];
    }
    addTopping(topping) {    // Добавить добавку 
        if (this.toppings.indexOf(topping) < 0) {
            this.toppings.push(topping);
        }
    }
    removeTopping(topping) { // Убрать добавку 
        this.toppings.splice(this.toppings.indexOf(topping));
    };
    getToppings() {   // Получить список добавок 
        if (this.toppings === undefined) {
            return '';
        } else {
            let res = '';
            this.toppings.forEach(item => (res+=` ${item.nameRU}`));
            return res.trim();
        }
    }
    getSize() {              // Узнать размер гамбургера 
        return this.size.nameRU;
    };
    getStuffing() {          // Узнать начинку гамбургера 
        if (this.stuffing === undefined) {
            return ''
        } else {
            return this.stuffing.nameRU;
        }
    };
    calculatePrice() {       // Узнать цену 
        let total = this.size.price + this.stuffing.price;
        this.toppings.forEach((item) => {
            total += item.price;
        })
        return total;
    };
    calculateCalories() {    // Узнать калорийность 
        let total = this.size.calories + this.stuffing.calories;
        this.toppings.forEach((item) => {
            total += item.calories;
        })
        return total;
    };
}

const sizes = [
    {name: 'large', nameRU: 'большой', price: 100, calories: 40},
    {name: 'small', nameRU: 'маленький', price: 50, calories: 20}
]

const stuffings = [
    {name: 'cheese', nameRU: 'сыр', price: 10, calories: 20},
    {name: 'salad', nameRU: 'салат', price: 20, calories: 5},
    {name: 'potato', nameRU: 'картофель', price: 15, calories: 10}
]

const toppings = [
    {name: 'spice', nameRU: 'приправа', price: 15, calories: 0},
    {name: 'maio', nameRU: 'майонез', price: 20, calories: 5}
]

const getObjByName = (name, arrName) => {
    for(let i = 0; i < arrName.length; i++) {
        if(arrName[i].name == name) {
            return arrName[i];
        }
    }
}

const getCheckboxValue = (name, checked = true) => {
    let ele = document.getElementsByName(name);
    let res = [];
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked === checked) {
            res.push(ele[i].value);
        }
    }
    return res;
}

const chooseSizeStuffing = () => {
    let size = getCheckboxValue('size');
    newBurger.size = getObjByName(size[0], sizes);
    let stuffing = getCheckboxValue('stuffing');
    newBurger.stuffing = getObjByName(stuffing[0], stuffings);
    renderChoice();
}

const chooseTopping = () => {
    let choosedToppings = [];
    getCheckboxValue('topping').forEach((element) => {
        choosedToppings.push(getObjByName(element, toppings));
    })
    newBurger.toppings = choosedToppings;
    renderChoice();
}

const renderChoice = () => {
    document.querySelector('.customer-choice').innerHTML = 
    `<h2>Выбрано:</h2><p>Размер - ${newBurger.getSize()}</p><p>Начинка - ${newBurger.getStuffing()}</p><p>Добавка(и) - ${newBurger.getToppings()}</p>`;
}

const renderPrice = () => {
    if (newBurger.getStuffing() === '') {
        alert('Не выбрана начинка!')
    } else
    {
        document.querySelector('.chosen-price').innerHTML = 
        `<p>Общая стоимость - ${newBurger.calculatePrice()}</p>`;
    }
}

const renderCalories = () => {
    if (newBurger.getStuffing() === '') {
        alert('Не выбрана начинка!')
    } else
    {
        document.querySelector('.chosen-calories').innerHTML = 
        `<p>Общая калорийность - ${newBurger.calculateCalories()}</p>`;
    }
}

const init = () => {
    let checkboxArr = document.getElementsByName('size');
    checkboxArr.forEach(item => (item.addEventListener('click', chooseSizeStuffing)));
    checkboxArr = document.getElementsByName('stuffing');
    checkboxArr.forEach(item => (item.addEventListener('click', chooseSizeStuffing)));
    checkboxArr = document.getElementsByName('topping');
    checkboxArr.forEach(item => (item.addEventListener('click', chooseTopping)));
    let currentButton = document.getElementById('count-price');
    currentButton.addEventListener('click', renderPrice);
    currentButton = document.getElementById('count-calories');
    currentButton.addEventListener('click', renderCalories);
    renderChoice();
}

const newBurger = new Hamburger(getObjByName('large', sizes));

window.onload = init;