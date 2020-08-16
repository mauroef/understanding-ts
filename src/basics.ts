function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): number {
  if (showResult) {
    console.log(phrase + (n1 + n2));
  } else {
    return n1 + n2;
  }
}

const num1: number = 10;
const num2: number = 5;
const printResult: boolean = true;
const resultPhrase = 'Result is: ';

add(50, 5, printResult, resultPhrase);
