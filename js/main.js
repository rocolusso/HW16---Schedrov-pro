'use strict';

let num = +prompt('Введите число');
let step = +prompt('Введите степень');
let result = null;

function mathFunc (num,step= 1){
    if (isNaN(num) || isNaN(step)) {
        return console.log('some error')
    } else {
        result = Math.pow(num,step);
        return result;
    }

}

mathFunc(num,step);

if (result !== null){
    alert(result);
}







