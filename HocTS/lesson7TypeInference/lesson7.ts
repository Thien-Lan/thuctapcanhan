let count1 = 20;
//let count1: number = 20;

// count1 = "Lân"; Lỗi vì typescript nó sẽ tự động nhận dạng kiểu của count1 là number
// khi ban đầu gán nó là 20 
console.log(count1);


let mang = ['Phạm', 'Nguyễn', 'Thiên', 'Lân', 2002];
//typescript nhận diện mang có thể nhận kiểu string hoặc number
mang.push(21);

console.log(mang);


// khai báo string khác String
//Khai báo String, Number, Boolean... là khai báo 1 object
//Khi dùng chữ thường string, number, boolean... là dùng 1 biến, kiểu dữ liệu nguyên thủy