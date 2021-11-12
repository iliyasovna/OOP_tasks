// const circle = {
//     radius: 1,
//     position: {
//         X: 1,
//         y: 1
//     },
//     draw: function() {
//         document.write ("Drawing circle...");
//     },
// }
// circle.draw();


// // Factory function
// function createCircle(radius) {
//     return {
//         radius: radius,
//         draw: function() {
//             document.write(`Drawing circle... R:${radius}<br>`)
//         },
//     };
// }

// const circle = createCircle(1);
// circle.draw();

// const circle2 = createCircle(2);
// circle2.draw();

// const circle3 = createCircle(3);
// circle3.draw();


// Constructor function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         document.write(`Drawing circle... R${this.radius}`);
//     };
// }

// const circle = new Circle(1);
// console.log(circle.radius);
// circle.draw();

// const circle20 = new Circle(20);
// console.log(circle20.radius);
// circle20.draw();


// // Создание объектов через Class
// class Circle {
//     constructor(radius) {
//       this.radius = radius;
//     }
  
//     draw() {
//       console.log(`Drawing circle R: ${this.radius}`);
//     }
//   }
  
//   const circle = new Circle(1);
//   circle.draw();

//   const circle7 = new Circle(17);
//   circle7.draw();

// // Насследование
// // Класс может наследовать от другого класса.
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {
//         console.log(`Hello my name is ${this.name}.`);
//     }

//     sayAge() {
//         console.log(` I am ${this.age}.`);
//     }
// }

// const ivan = new User("Ivan", 25);
// ivan.sayName();
// ivan.sayAge();

// class Admin extends User {
//     constructor(name, age, userRole) {
//         super(name, age);

//         this.userRole = userRole;
//     }

//     sayName() {
//        super.sayName();
//            document.write(`Super hero of this website`);
//     }
//     sayAge() {
//         document.write(` Мне ${this.age}.`);
//     }

//     sayRole() {
//         document.write(` I am ${this.userRole}.`);
//     }
// }
// //  const vasya = new User ("Vasya", 15);
// //  vasya.sayName();
// //  vasya.sayAge();

//  const pete = new Admin ("Pete", 25, "Admin");
//  pete.sayName();
//  document.write("<br>");
//  pete.sayAge();
//  pete.sayRole();


// let x = 10;
// let y = x;

// x = 20;

// console.log(x);
// console.log(y);

// упр-1
// class Resto {
//     constructor (name, type, time) {
//         this.name = name;
//         this.type = type;
//         this.time = time;
//     }
//     showName() {
//         document.write(`Это ресторан ${this.name}<br>`);
//     }
//     showType() {
//         document.write(`Тип кухни: ${this.type}<br>`);
//     }
//     showTime() {
//         document.write(`ресторан ${this.time}<br>`)
//     }
// }

// const chine = new Resto ("Гуанжо", "китайская кухня", "open");
// chine.showName();
// chine.showType();
// chine.showTime();

// упр-2
// class User {
//     constructor (fistName, lastName, age, gender, country) {
//         this.firstName = fistName;
//         this.lastName = lastName;
//         this.age = age;
//         this.gender = gender;
//         this.country = country;
//     }
//     describeUser(){
//         document.write(`Пользователь: ${this.firstName} ${this.lastName}. Возраст: ${this.age} лет. Пол: ${this.gender}, Страна: ${this.country}`);
//     }
//     greetUser() {
//      document.write(`Добро пожаловать на наш сайт, ${this.firstName} ${this.lastName}`);
//     }
// }
// const user1 = new User ("Акмат", "Ташматов", 26, "male", "Kyrgyzstan");
// user1.describeUser();
// document.write(`<br>`)
// user1.greetUser();

// ДЗ-1

// class Resto {
//     constructor (name, type, time) {
//         this.name = name;
//         this.type = type;
//         this.time = time;
//     }
//     showName() {
//         document.write(`Это ресторан ${this.name}<br>`);
//     }
//     showType() {
//         document.write(`Тип кухни: ${this.type}<br>`);
//     }
//     showTime() {
//         document.write(`ресторан ${this.time}<br>`)
//     }
// }

// const chine = new Resto ("Гуанжо", "китайская кухня", "open");
// chine.showName();
// chine.showType();
// chine.showTime();



// ДЗ-2

class Cars {
    constructor (model, year, enginePower, color) {
        this.model = model;
        this.year = year;
        this.enginePower = enginePower;
        this.color = color;
    }
    showModel() {
        document.write(`марка авто: ${this.model} <br>`);
    }
    showYear() {
        document.write(`год выпуска: ${this.year} <br>`);
    }
    showenginePower() {
        document.write(`мощность двигателя: ${this.enginePower} л.с. <br>`);
    }
    showColor(){
        document.write(`цвет машины: ${this.color} <br>`);
    }
}

class ElectroCars extends Cars {
    constructor (model, year, enginePower, color, batteryVolume) {
        super (model, year, enginePower, color);
        this.batteryVolume = batteryVolume;
    }
    promote() {
        document.write(`<b><i>Покупайте электромобиль</i></b>`);
    }
    showBatteryVolume() {
        document.write (` ёмкость аккумулятора: ${this.batteryVolume} кВт/ч. <br>`)
    }
}

const LX450d = new Cars ("LX 450d", 2020, 272, "black");
LX450d.showModel();
LX450d.showYear();
LX450d.showenginePower();
LX450d.showColor();
document.write(`<br>`);

const electroCar = new ElectroCars ("Tesla Model 3", 2021, 462, "red", 85);
electroCar.showModel();
electroCar.showYear();
electroCar.showenginePower();
electroCar.showColor();
electroCar.showBatteryVolume();
electroCar.promote();
