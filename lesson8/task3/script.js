const app = new Vue({    
        el: '#app',
        data: {
            firstNumber: undefined,
            secondNumber: undefined,
            result: undefined,
            currentNumber: undefined,
            action: undefined,
            displayAction: undefined,
        },
        methods: {
            chooseSum() {
                this.firstNumber = this.currentNumber;
                this.action = 'sum';
                this.displayAction = '+';
                this.currentNumber = undefined;
            },
            chooseSub() {
                this.firstNumber = this.currentNumber;
                this.action = 'sub';
                this.displayAction = '-';
                this.currentNumber = undefined;
            },
            chooseMul() {
                this.firstNumber = this.currentNumber;
                this.action = 'mul';
                this.displayAction = '*';
                this.currentNumber = undefined;
            },
            chooseDiv() {
                this.firstNumber = this.currentNumber;
                this.action = 'div';
                this.displayAction = '/';
                this.currentNumber = undefined;
            },
            performCalc() {
                this.secondNumber = this.currentNumber;
                this.currentNumber = undefined;
                this.result = this[this.action](this.firstNumber, this.secondNumber);
                console.log(this.result);
            },
            clearValues() {
                this.currentNumber = undefined;
                this.firstNumber = undefined;
                this.secondNumber = undefined;
                this.displayAction = undefined;
                this.action = undefined;
                this.result = undefined;
            },
            sum(a,b) {
                if(a===null || a===undefined) a=0;
                a=parseFloat(a);
                if(b===null || b===undefined) b=0;            
                b=parseFloat(b);
                if(isNaN(a) || isNaN(b)) {
                    return 'error'
                } else {
                    return a+b;
                }
            },
            sub(a,b) {
                if(a===null || a===undefined) a=0;
                a=parseFloat(a);
                if(b===null || b===undefined) b=0;
                b=parseFloat(b);
                if(isNaN(a) || isNaN(b)) {
                    return 'error'
                } else {
                    return a-b;
                }
            },
            mul(a,b) {
                if(a===null || a===undefined) a=0;
                a=parseFloat(a);
                if(b===null || b===undefined) b=0;
                b=parseFloat(b);
                if(isNaN(a) || isNaN(b)) {
                    return 'error'
                } else {
                    return a*b;
                }
            },
            div(a,b){
                if(a===null || a===undefined) a=0;
                a=parseFloat(a);
                b=parseFloat(b);
                if(b===null || b===undefined || b===0) {
                 return 'error'
                } else {
                    if(isNaN(a) || isNaN(b)) return 'error'
                    else return a/b;
                }
            }
        }
    })