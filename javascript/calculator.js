const calculator = {

    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    times: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    },
    power: function(a, b){
        return a**b;
    }
};

const plusResult = calculator.add(2,3);
const minusResult = calculator.sub(plusResult,10);
const timesResult = calculator.times(10,minusResult);
const divideResult = calculator.divide(timesResult,plusResult);
const powerResult = calculator.power(divideResult,minusResult);



