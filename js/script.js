"use strict"

// -->  1  <--
let array = [7,3,-13,16,-4,22,-5,-8]
let numbers = array.filter((num) => num > 0);
console.log(numbers.length);

let positive = numbers.reduce(positive_numbers);

function positive_numbers(positive, num) {
  return positive + num;
}

console.log(positive);

// -->  2  <--

let strings = ['a', 'b', 'c', 'b', 'a', 'b', 'b', 'c', 'c'];

 let countString = strings.reduce((acc, str) => {
  acc[str] = (acc[str] || 0) + 1;
  return acc;
}, {});

console.log(countString);

// -->   3  <--

class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
      this.speed = 0;
      this.motion = 'The car is not moving';
    }
  
    checkMotion() {
      this.motion = this.speed > 0 ? 'The car is moving' : 'The car is stopped';
    }
  
    accelerate(speed) {
      this.speed += speed;
      this.checkMotion();
    }
  
    brake(speed) {
      this.speed -= speed;
      if (this.speed < 0) {
        this.speed = 0;
      }
      this.checkMotion();
    }
  
    emergencyBrake() {
      this.speed = 0;
      this.checkMotion();
    }
  
    status() {
      return `მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია ${this.motion}.`;
    }
  }
  
  let car = new Car('Ford', 'Mustang');
  console.log(car.status()); 
  
  car.accelerate(80);
  console.log(car.status()); 
  
  car.brake(30);
  console.log(car.status()); 
  
  car.emergencyBrake();
  console.log(car.status()); 

//   -->  4  <--


function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      if (a !== undefined && b !== undefined && typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject(new Error('error'));
      }
    });
  }
  

  addAsync(1, 2)
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error.message);
    });
  

  addAsync('1', 2)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message); 
    });