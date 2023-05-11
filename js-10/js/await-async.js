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

const tabla = async () => {
  try {
    for (let i = 1; i <= 10; i++) { // i = 2
      let response = await multiplicar(2, i);
      console.log(
        `${response.num1} * ${response.num2} = ${response.resultado}`
      );
    }

    // response = await multiplicar(2, 2);
    // console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);

    // response = await multiplicar(2, 3);
    // console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
  } catch (error) {
    console.log(error);
  }
};

tabla();
