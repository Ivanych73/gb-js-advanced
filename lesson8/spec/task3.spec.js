const task3 = require('../task3/task3');
const sub = task3.sub;
const sum = task3.sum;
const mul = task3.mul;
const div = task3.div;

describe ('Функция sum()', () => {
    it('Должна возвращать 4 при аргументах 2, 2', () => {
        expect(sum(2,2)).toBe(4);
    });
    it('Должна возвращать 2 при аргументах null, 2', () => {
        expect(sum(null,2)).toBe(2);
    });
    it('Должна возвращать error при аргументах NaN, 2', () => {
        expect(sum(NaN,2)).toBe('error');
    });
})

describe ('Функция sub()', () => {
    it('Должна возвращать 4 при аргументах 10, 6', () => {
        expect(sub(10,6)).toBe(4);
    });
    it('Должна возвращать -2 при аргументах null, 2', () => {
        expect(sub(null,2)).toBe(-2);
    });
    it('Должна возвращать error при аргументах NaN, 2', () => {
        expect(sub(NaN,2)).toBe('error');
    });
})

describe ('Функция mul()', () => {
    it('Должна возвращать 12 при аргументах 3, 4', () => {
        expect(mul(3,4)).toBe(12);
    });
    it('Должна возвращать 0 при аргументах null, 2', () => {
        expect(mul(null,2)).toBe(0);
    });
    it('Должна возвращать 0 при аргументах 23, 0', () => {
        expect(mul(2323,0)).toBe(0);
    });
    it('Должна возвращать error при аргументах NaN, 2', () => {
        expect(mul(NaN,2)).toBe('error');
    });
})

describe ('Функция div()', () => {
    it('Должна возвращать 0.75 при аргументах 3, 4', () => {
        expect(div(3,4)).toBe(0.75);
    });
    it('Должна возвращать error при аргументах 2, null', () => {
        expect(div(2, null)).toBe('error');
    });
    it('Должна возвращать error при аргументах NaN, 2', () => {
        expect(div(NaN,2)).toBe('error');
    });
})