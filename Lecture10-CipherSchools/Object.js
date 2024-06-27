//1)By using onject literal method

// let person = {
//     firstName:"Yamuna",
//     lastName: "Kanchi",
//     fullName:function(){
//         return `MY full name is ${this.firstName} ${this.lastName}`;
//     },
//     phoneNumber:{
//         mobile:"1345",
//         landline:"5667"
//     },
// };
// console.log(person.fullName());
// console.log(person.phoneNumber.landline);
//2)By using constructor method
// function person(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;

// }

// let person1 = new person("Yamuna","Kanchi");
// let person2 = new person("Sheela","Boorla");
// console.log(`Full Name ${person1.firstName} ${person1.lastName} `);
// console.log(`Full Name ${person2.firstName} ${person2.lastName} `);
//3)Bys using object.create() method
// const coder = {
//     isStudying :false,
//     printIntro:function(){
//         console.log(`My name is ${this.name} am I studying? ${this.isStudying}`);

//     }

// };
// const me = Object.create(coder);
// me.name = "Yamuna Kanchi";
// me.isStudying = true;
// me.printIntro()
// class Vechicle{
//     constructor(name,maker,engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails(){
//         return `The name of the vehile ${this.name}`;
//     }
// };
// let v1 = new Vechicle("Creta","Hyumdai","2500cc");
// let v2 = new Vechicle("Q5","Audi","3000cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());
// Before Es6
// Yes, JavaScript does have classes. The class syntax was introduced in ECMAScript 6 (ES6) in 2015 to provide a more convenient and clearer 
// syntax for creating objects and handling inheritance, but it is essentially syntactic 
// sugar over JavaScript's existing prototype-based inheritance.
//The below code is the prototype-based inheritance
// function Vehicle(name,maker,engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;

// }
// Vehicle.prototype.getDetails = function(){
//     return `The name of the vehicle is ${this.name}`;
// }
// let v1 = new Vehicle("Creta","Hyumdai","2500cc");
// let v2 = new Vehicle("Q5","Audi","3000cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());
//Abstraction
// class person {
//     constructor(name,id){
//         this.name = name;
//         this.id = id
//     }
//     addAddress(newAddress){
//         this.address = newAddress
//     }
//     getDetails(){
//         return `name is ${this.name} and address is ${this.address}`;
//     }
// };
// let person1 = new person("Yamuna",24);
// person1.addAddress("macherial");
// console.log(person1.getDetails());
// C
//     access = function(){
//         return `${this.fname} ${this.lname}`
//     }
// }
// let person1 = new person("Yamuna","Kanchi");
// console.log(person1.access());
// console.log(person1.No_access());
// //Inheritance
class person {
        constructor(fname,lname){
            this.fname = fname;
            this.lname = lname;
        }
    
        getDetails(){
            return `name is ${this.fname}  ${this.lname}`;
        }
};
class Student extends person{
    constructor(fname,lname,rollNum){
        super(fname,lname);
        this.rollNum = rollNum;

    }
    getDetails(){
        return `${this.fname} ${this.lname} ${this.rollNum}`;
    }

}
let person1 = new person("Yamuna","kanchi");
console.log(person1.getDetails());
let stu1 = new Student("Sheela","Boorla",10);
console.log(stu1.getDetails());













