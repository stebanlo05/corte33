const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);