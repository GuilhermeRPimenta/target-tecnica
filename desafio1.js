const fib = (num1, num2, valueToCheck) => {
  const num3 = num1 + num2;
  if (num1 === valueToCheck || num2 === valueToCheck || num3 === valueToCheck) {
    console.log("O número pertence à sequência");
    return;
  }

  if (num3 > valueToCheck) {
    console.log("O número não pertence à sequência");
    return;
  }

  return fib(num2, num3, valueToCheck);
};

const valueToCheck = 8; //Digite aqui o valor para checar
fib(0, 1, valueToCheck);
