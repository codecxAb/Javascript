//DON'T REPEAT YOURSELF ------------------------- DRY---------------------------------------------------
let radius = [3,4,6];

const area = function(radius){
    return Math.PI* radius*radius;
}
const perimeter = function(radius){
    return 2* Math.PI* radius;
}

function calculator(radius, logic){
    const arealist =[];
    for(i=0; i<radius.length; i++){
        arealist.push(logic(radius[i]));
    }

    return arealist;
}

// console.log(calculator(radius, area));
console.log(radius.map(area));

// console.log(calculator(radius,perimeter));
console.log(radius.map(perimeter))
