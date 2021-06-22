const sum = (a,b) => {
    if(a===null || a===undefined) a=0;
    a=parseFloat(a);
    if(b===null || b===undefined) b=0;            
    b=parseFloat(b);
    if(isNaN(a) || isNaN(b)) {
        return 'error'
    } else {
        return a+b;
    }
}

const sub = (a,b) => {
    if(a===null || a===undefined) a=0;
    a=parseFloat(a);
    if(b===null || b===undefined) b=0;
    b=parseFloat(b);
    if(isNaN(a) || isNaN(b)) {
        return 'error'
    } else {
        return a-b;
    }
}
const mul = (a,b) => {
    if(a===null || a===undefined) a=0;
    a=parseFloat(a);
    if(b===null || b===undefined) b=0;
    b=parseFloat(b);
    if(isNaN(a) || isNaN(b)) {
        return 'error'
    } else {
        return a*b;
    }
}
const div = (a,b) => {
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

module.exports = {
    sum: sum,
    sub: sub,
    mul: mul,
    div: div,
}