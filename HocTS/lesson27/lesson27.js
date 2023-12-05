function sum(a, b) {
    return a + b;
}

console.log(sum(9, 7));

//console.log(sum(1));
//js không báo lỗi và nó trả về NaN


function sum10(a, b, c = 0) {
    return a + b + c;
}

console.log(sum10(1, 2)); //3 
console.log(sum10(1, 2, 3)); //6