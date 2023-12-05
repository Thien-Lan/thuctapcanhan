let person: object; // = let person: {}

person = { name: "Thiên Lân" };



let person1: {
    name: string,
    age: number
} = {
    name: "Thiên Lân",
    age: 21
}

// person1.adress = "Phú Yên"; TS không cho phép thêm biến mới, tránh trường hợp gặp bug
// nếu có được sử dụng chung, khác với bên js.