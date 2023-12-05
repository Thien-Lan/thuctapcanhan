let info: (string | number)[] = ["Phạm Nguyễn Thiên Lân", 25];
info.push("CoCa");
info.push(21);

//tuple: dataType/size/order
let info2: [string, number] = ["Phạm Nguyễn Thiên Lân", 25];

let info3: [string, number, boolean];

info3 = ["Thiên Lân", 21, true]; // phải theo trình tự của tuple, nó khác với array.

let info4: [string, number, boolean?];
// optional tuple (boolean có thể có hoặc không)
// kiểu dữ liệu của optional tuple phải nằm ở cuối mảng