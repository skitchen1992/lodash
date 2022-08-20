import {range} from "./range"
import {rangeRight} from "./range"
console.log(range(4)); // => [0, 1, 2, 3]
console.log(range(-4)); // => [0, -1, -2, -3]
console.log(range(1, 5)); // => [1, 2, 3, 4]
console.log(range(0, 20, 5)); // => [0, 5, 10, 15]
console.log(range(0, -4, -1)); // => [0, -1, -2, -3]
console.log(range(1, 4, 0)); // => [1, 1, 1]
console.log(range(0)); // => []

console.log(rangeRight(4)); // => [3, 2, 1, 0]
console.log(rangeRight(-4)); // => [-3, -2, -1, 0]
console.log(rangeRight(1, 5)); // => [4, 3, 2, 1]
console.log(rangeRight(0, 20, 5)); // => [15, 10, 5, 0]
console.log(rangeRight(0, -4, -1)); // => [-3, -2, -1, 0]
console.log(rangeRight(1, 4, 0)); // => [1, 1, 1]
console.log(rangeRight(0)); // => []
