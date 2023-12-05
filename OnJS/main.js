/* Một số hàm Built in cơ bản
1. alert (Hiển thị ra cửa sổ thông báo)
alert('Xin chào');
2. console (Hiển thị nội dung lên cửa số console)
console.log 
console.warn
console.error
3. confirm (Tạo ra hộp thoại xác nhận)
4. prompt (Giống confirm nhưng có 1 ô input)
5. setTimeout 
setTimeout(function(){
    alert('Hello')
}, 1000)
Sau 1 giây hiển thị ra alert
6. setInterval
setTimeout(function(){
    console.log('Đây là thông báo')
}, 1000)
*/


/*
Kiểu dữ liệu
1. Dữ liệu nguyên thủy (Number, String, Boolean, Underfined, Null)
    - Number type: var a = 1;
    - String type: var fullName = 'Thien \'s Lan';
    - Boolean type: var TL = true;
    - Underfined type: var age; 
    - Null type: var TL = null;
2. Dữ liệu phức tạp (Function, Object)
    - Function type:

    var myFunction = function(){
        alert('Xin chào mọi người')
    }

    myFunction();

    - Object type:

    var myObject = {
        name: 'Thien Lan',
        age: 21,
        address: 'Phu Yen',

    }
    console.log(myObject)
    console.log(myObject.name);
*/ 


/* Làm việc với chuỗi

1. Length
    var myString = 'ThienLan';
    console.log(myString.length) //8

2. Find index
    console.log(myString.indexOf('T'); //0
    console.log(myString.indexOf('Z'); //-1

3. Cut string
    console.log(myString.slice(1,2)); //h
    console.log(myString.slice(0)); //ThienLan
    console.log(myString.slice(2)); //hien Lan
    console.log(myString.slice(-3,-1)); //La

4. Replace
    var myString = 'TL';
    console.log(myString.replace('TL', 'Thien Lan')); //Thien Lan

    var myString = 'TL TL TL';
    console.log(myString.replace(/TL/g, 'Thien Lan')); //Thien Lan Thien Lan Thien Lan
5. Covert to Upper Case and lower Case
    console.log(myString.toUpperCase()); 
    console.log(myString.toLowerCase());

6. Trim (Loại bỏ khoảng trắng ở 2 đầu)
    console.log(myString.trim());

7. Split
    console.log(myString.split(',');
*/

/* Array
Lưu ý: 

    var languages = ['JS', 'PHP', 'Ruby'];
    console.log(typeof languages); // object
    console.log(typeof {}); // object
    vì không thể phân biệt được giữa object và array nên ta dùng
    console.log(Array.isArray(languages)); // true (đúng là array)
    console.log(Array.isArray({})); // false (sai vì nó là object)

    - toString
    console.log(languages.toString()); //JS, PHP, Ruby
    
    - join
    console.log(languages.join('-')); //JS-PHP-Ruby

    - pop
    console.log(languages.pop()); // Xóa phần tử cuối của mảng, in ra phần tử đó

    - push
    console.log(languages.push('Dart')); // Thêm phần tử vào cuối mảng, in ra số lượng phần tử trong mảng
    console.log(languages); //Hiển thị ra mảng sau khi thêm

    - shift
    console.log(languages.shift()); // Xóa phần tử đầu của mảng, in ra phần tử đó
    console.log(languages);

    - unshift
    console.log(languages.unshift('Dart')); // Thêm phần tử vào đầu mảng, in ra số lượng phần tử trong mảng
    console.log(languages);

    - splicing languages.splice(x, y, z); //x là vị trí con trỏ trỏ vào, y là số lượng phần tử muốn xóa, z là phần tử muốn thêm vào
    languages.splice(1,1); 
    console.log(languages); //(2) ['JS', 'Ruby']

    languages.splice(1,1, 'Dart'); 
    console.log(languages); //(3) ['JS', 'Dart', 'Ruby']

    - concat: Nối 2 mảng
    var languages = ['JS', 'PHP', 'Ruby'];
    var languages2 = ['Java', 'C'];
    console.log(languages.concat(languages2)); //(5) ['JS', 'PHP', 'Ruby', 'Java', 'C']

    - slicing: 
    var languages = ['JS', 'PHP', 'Ruby'];
    var languages2 = ['Java', 'C'];
    console.log(languages.slice(1,2)); //Cắt từ vị trí 1 đến đầu vị trí 2 là ra PHP 
    
*/


/* Hàm
1. Hàm 
    - Một khối mã
    - Làm một việc cụ thể

2. Loại hàm
    - Built-in
    - Tự định nghĩa 

3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể nhận về 1 giá trị

4. Tạo hàm đầu tiên
    function showDialog(){
        alert('Xin chào mọi người');
    }

    showDialog();
    
5. Tham số arguments
    function writelog() {
        console.log(arguments);
    }

    writelog('Log 1', 'Log 2', 'Log 3');

6. Lưu ý:
    - Nếu có hai hàm trùng nhau thì hàm định nghĩa sau sẽ ghi đè lên hàm trước đó
*/


/* Các loại function
1. Declaration function: khi tạo ra một function có tên, đó gọi là function declaration
    myFunc();
    function myFunc (){
        alert(“Hello Góc Kinh Nghiệm”);
    }
2. Expression function:

    var expression = function (){
        alert(“Gọi tui là lỗi nha mấy chú”);
    }
    expression();
    Hoặc sử dụng cú pháp es6 tạo ra một function anonymous 
    (khai báo một function nhưng không dùng từ khóa function) cũng là function expression.
    const handleClick = () => {
        console.log('clicked')
    }

=> function declaration thì có thể gọi trước khi khai báo hoặc sau khi khai báo đều được,
 còn function expression thì phải có trình tự

*/


/* Object
    var myInfo = {
        name: 'Thiên Lân',
        age: 21,
        address: 'Phú Yên',
        getName: function(){
            return this.name; //sử dụng this thay vì myInfo để sau này có đổi tên myInfo thì hàm getName vẫn vậy
        }
    }

    myInfo.email = 'lan.pnt.62cntt@ntu.edu.vn'; //Thêm trường vào object
    myInfo[my-email] = 'lan.pnt.62cntt@ntu.edu.vn'; //Thêm trường vào object
    console.log(myInfo.email);
    console.log(myInfo[my-email]); // Lấy ra thông tin
    console.log(myInfo.getName());  



    function User(firstName, lastName, avatar){
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function(){
            return `${this.firstName} ${this.lastName}`;
        }
    }

    User.prototype.className = '62CNTT-2'; //Thêm thuộc tính vào object thông qua prototype
    User.prototype.getName = function(){
        return this.className;
    };

*/


/*Làm việc với mảng nâng cao

1. map()

    var course = [
        {
            id: 1,
            name: 'Java',
            class: '62CNTT-2'
        },
        {
            id: 2,
            name: 'HTML',
            class: '62CNTT-2'
        },
        {
            id: 3,
            name: 'ASP.NET',
            class: '62CNTT-2'
        },
    ]

    function sourceCourse(course){
        return course.name;
    }

    var newSourceCourse = course.map(sourceCourse);
    console.log(newSourceCourse);

*/



/* Call back: 
    - Là hàm được truyền qua đối số  khi gọi hàm khác

    function myFunction(param){
        if(typeof param === 'function')
            param('Hello word!');
    }

    function myCallBack(value){
        console.log('Value: ', value);
    }

    myFunction(myCallBack);

*/


/* DOM
1. ID
    document.getElementById(''); // Lấy ra element có ID trong ngoặc (Chỉ lấy ra 1 thẻ, nếu
    có nhiều thẻ trùng ID thì lấy ra thẻ đầu tiên)

2. class
    document.getElementsByClassName('') // Lấy ra element có class trong ngoặc (Lấy ra tất cả
    các thẻ có class tìm kiếm, trả về HTMLCollection cho biết độ dài của mảng)

3. tag
    document.getElementsByTagName('h1'); // Lấy ra các element của thẻ h1

4. querySelector

    <h1 class="heading"> HTML DOM </h1>

    document.querySelector('.heading'); 


    <div class="xinchao">
        <h1 class="heading-2"> HTML DOM </h1>
    </div>
    
    document.querySelector('.xinchao .heading-2');


    <div class="xinchao">
        <h1 class="heading-2"> HTML DOM </h1>
        <h1 class="heading-2"> HTML DOM </h1>
        <h1 class="heading-2"> HTML DOM </h1>
        <h1 class="heading-2"> HTML DOM </h1>
    </div>

    document.querySelector('.xinchao .heading-2:first-child'); //lấy ra heading-2 thứ 1
    document.querySelector('.xinchao .heading-2:nth-child(2)'); //Lấy ra heading-2 thứ 2
    document.querySelectorAll('.xinchao .heading-2'); //Lấy ra tất cả. Trả về NodeList

    var headingNodes = document.querySelectorAll('.xinchao .heading-2');
    console.log(headingNodes[0]); //Lấy ra thằng đầu tiên

    
*/





