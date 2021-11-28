"use strict";

const options = {
    name: `test`,
    width: 1024,
    height: 1024,
    color: {
        border: `black`,
        bg: `red`
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const { border, bg } = options.color;
console.log(border);

// console.log (Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for(let key in options) {
//     if(typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
//             counter++;
//         } 

//     } else {
//             console.log(`Свойство ${key} имеет значение ${options[key]}`);
//             counter++;
//     }
// }

// console.log(counter);

// const person = {
//     name: "Vlad",
//     age: 64,
//     height: 84,
//     color: {
//         skin: "white",
//         hair: "black"
//     }

// };

// console.log (Object.keys(person));

// console.log (Object.keys(person).length);