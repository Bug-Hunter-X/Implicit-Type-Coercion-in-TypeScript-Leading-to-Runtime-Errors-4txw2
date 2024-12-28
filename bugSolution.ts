function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: both arguments must be numbers.');
  }
  return a + b;
}

let result = add(5, 5); // No error
console.log(result); // Output: 10

try {
  let result2 = add("hello", 5); // This will throw an error
  console.log(result2);
} catch (error) {
  console.error(error);
} 