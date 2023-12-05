//Bên ts phải bắt buộc khai báo, function sum2(a, b) chạy sẽ bị lỗi
function sum2(a: number, b: number): number {
    return a + b;
}

//array function
const sum3 = (a: number, b: number): number => {
    return a + b;
}


console.log(sum2(9, 7));
console.log(sum3(9, 7));


//optional params

const sum4 = (a: number, b: number, c?: number): number => {
    if (c)
        return a + b + c;
    return a + b;
}

//default params
const sum5 = (a: number, b: number, c = false) => {
    if (c)
        return a + b;
    if (c === false)
        return a - b;
}

console.log(sum5(1, 2, true));
console.log(sum5(2, 1));


//rest params
//1 function chỉ có duy nhất 1 rest params, tham số cuối cùng trong ds tham số, sử dụng
// với array type
//sử dụng rest là copy tất cả các phần tử truyền vào
function toTal(...numbers: number[]) {
    let total = 0;
    numbers.forEach((number) => total += number);
    return total;
}

console.log(toTal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

console.log(multiply(10, 1, 2, 3));