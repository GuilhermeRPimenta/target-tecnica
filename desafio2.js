const str = "O rato roeu a roupa do rei de Roma"; //Digite aqui a string para checar
let sum = 0;
for (let i = 0; i < str.length; i++) {
  if (str.charAt(i).toLocaleLowerCase() === "a") {
    sum++;
  }
}

if (sum === 0) {
  console.log(`A letra "a" não existe na string dada`);
} else {
  console.log(`A letra "a" existe na string dada e aparece ${sum} vezes`);
}
