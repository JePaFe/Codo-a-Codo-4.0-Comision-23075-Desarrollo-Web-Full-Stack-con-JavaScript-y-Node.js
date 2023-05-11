const multiplicar = (num1, num2, callback) => {
  const resultado = num1 * num2;

  setTimeout(() => {
    callback(num1, num2, resultado);
  }, Math.floor(Math.random() * 2000));
};

// const mostrarResultado = (a, b, resultado) => {
//   console.log(`${a} * ${b} = ${resultado}`);
// };

multiplicar(2, 1, (a, b, resultado) => {
  console.log(`${a} * ${b} = ${resultado}`);

  multiplicar(2, 2, (a, b, resultado) => {
    console.log(`${a} * ${b} = ${resultado}`);

    multiplicar(2, 3, (a, b, resultado) => {
      console.log(`${a} * ${b} = ${resultado}`);

      multiplicar(2, 4, (a, b, resultado) => {
        console.log(`${a} * ${b} = ${resultado}`);
      });
    });
  });
});
