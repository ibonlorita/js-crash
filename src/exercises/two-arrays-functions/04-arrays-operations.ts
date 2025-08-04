export {};

console.log(" 開始練習：陣列操作");

console.log("\n 1. 陣列建立與基本操作");

// 不同方式建立陣列
const fruits: string[] = ["apple", "banana", "cherry"];
const numbers: number[] = [1, 2, 3, 4, 5];
const mixed: (string | number)[] = ["apple", 1, "banana", "more text", 456];
const empty: string[] = [];

console.log("水果文字陣列:", fruits);
console.log("數字陣列:", numbers);
console.log("混合型別陣列:", mixed);
console.log("空陣列:", empty);

// Array 陣列子
const arrayFromConstructor = new Array(5).fill(0); //[0, 0, 0, 0, 0]
const arrayFromOf = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
const arrayFromRange = Array.from({ length: 5 }, (_, i) => i + 1); // [0, 1, 2, 3, 4]