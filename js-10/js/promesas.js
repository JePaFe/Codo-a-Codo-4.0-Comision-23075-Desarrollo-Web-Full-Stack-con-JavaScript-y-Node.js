const multiplicar = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return Promise.reject("Los valores no son numeros");
  }
  return new Promise((resolve, reject) => {
    const resultado = num1 * num2;

    setTimeout(() => {
      resolve({ num1, num2, resultado });
    }, Math.floor(Math.random() * 2000));
  });
};

multiplicar(2, 1)
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
    return multiplicar(2, 2);
  })
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
    return multiplicar(2, 3);
  })
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
  })
  .catch((error) => console.log(error));
