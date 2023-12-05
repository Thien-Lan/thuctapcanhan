const tong = (a: number, b: number): number => {
    return a + b;
}

const handleLogs = (message: string): void => {
    console.log(message);
}

function handleException(errorMessage: string): never {
    throw Error(errorMessage);
}

let a = handleException("Error");
console.log(a);

//never không bao giờ trả về giá trị. Kiểu dữ liệu never sử dụng khi chắc chắn điều đó không bao giờ xảy ra

// function runInfinity(): void {
//     while (true) {
//         console.log("Running......");
//     }
// }

// runInfinity();
