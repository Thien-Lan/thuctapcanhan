class Student {
    public className: string;
    private _age: number;
    public firstName: string;
    public lastName: string;
    readonly birthDate: Date;

    constructor(className: string, age: number, firstName: string, lastName: string, birthDate: Date) {
        this.className = className;
        this._age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        if (age < 0 || age > 100)
            throw Error("Invalid age: ");
        this._age = age;
    }
}


let student1 = new Student("62.CNTT-2", 21, "Phạm", "Nguyễn Thiên Lân", new Date(2002, 12, 6));
student1.className = "63.CNTT-2";
// student1.age = 22; Lỗi vì khai báo private
console.log(student1.age);
student1.age = 22;
console.log(student1.getFullName());
console.log(student1.age);