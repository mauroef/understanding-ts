function add(a: number, b: number, showResult): number {
  if (showResult) {
    console.log(a + b);
  } else {
    return a + b;
  }
}

const num1: number = 10;
const num2: number = 5;
const printResult: boolean = true;

add(50, 5, true);
