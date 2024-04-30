// static= it defines properties or methods that belong to a class 
// itself rather than the objects created from that class 
// ( class owns anything static, not the objects)

// 1. static methods
//A static method is a method that belongs to the class itself, rather than to instances of the class. 
//It can be called directly on the class without the need to create an instance.
    class MyClass1 {
    static staticMethod() {
    return 'This is a static method';
    }
}

  console.log(MyClass1.staticMethod()); // Output: This is a static method



//example2
// to determine how many objects are created
//static declare gareko datamembers haru class ko hunx object instances ko hudaina  ekchoti matrai memory alocation  hunx
//ani tehi same memory address ma vako datamembers haru acces garxn sab instances le

class MyClass {
    static countObject = 0;

    constructor() {
        console.log("Object is created");
        MyClass.countObject++;
    }

    display() {
        console.log(MyClass.countObject);
    }
}

const obj1 = new MyClass();
const obj2 = new MyClass();
const obj3 = new MyClass();
const obj4 = new MyClass();
const obj5 = new MyClass();

obj5.display(); // Output: 5

