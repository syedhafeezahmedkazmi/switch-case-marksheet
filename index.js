"use strict";
// ................. MarkSheet..................
Object.defineProperty(exports, "__esModule", { value: true });
let marks = 88;
// let marks:number = 77
// let marks:number = 67
// let marks:number = 54
// let marks:number = 101
switch (true) {
    case marks > 80 && marks <= 100:
        console.log("Your greade is A");
        break;
    case marks > 70 && marks <= 80:
        console.log("Your greade is B");
        break;
    case marks > 60 && marks <= 70:
        console.log("Your greade is C");
        break;
    case marks >= 50 && marks <= 60:
        console.log("Your greade is D");
        break;
    default:
        console.log("Your number is in-correct");
        break;
}
