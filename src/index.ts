//lab2
// 1.
function printEvenNumbersFor(start: number, end: number): void {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
function printEvenNumbersWhile(start: number, end: number): void {
  let i = start;
  while (i <= end) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}

// 2. loop infinito: adição de números em ponto flutuante (i += 0.2) gera imprecisões no cálculo, fazendo com que i nunca atinja exatamente 10. 

// 3.
function min(x: number, y: number): number {
  return x < y ? x : y;
}

// 4.
function powIterative(x: number, y: number): number {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}
function powRecursive(x: number, y: number): number {
  if (y === 0) return 1; // Base
  return x * powRecursive(x, y - 1);
}

// 5.
function toMaiusculaPrimeira(s: string): string {
  return s[0].toUpperCase() + s.slice(1);
}

// 6.
function getMax(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 7.
function calculateFrequency(arr: number[]): Map<number, number> {
  const frequency = new Map<number, number>();
  for (const num of arr) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }
  return frequency;
}

printEvenNumbersFor(1, 10);
printEvenNumbersWhile(1, 10);
console.log(min(3, 5));
console.log(powIterative(2, 3));
console.log(powRecursive(2, 3));
console.log(toMaiusculaPrimeira("exemplo"));
console.log(getMax([1, 3, 7, 2, 5]));
console.log(calculateFrequency([1, 2, 2, 3, 3, 3]));
