//Union Type
//Thay vì dùng a: any, b: any ta có thể sử dung a: number | string, b: number | string
//Sử dụng Type Aliases
type numberOrString = number | string;
function addNumberOrString(a: numberOrString, b: numberOrString) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Dữ liệu phải là kiểu string hoặc number');
}

//Lỗi khi running
// console.log(true, 9);
console.log(addNumberOrString(6, 9));