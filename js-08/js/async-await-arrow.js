const esperar = (condicion) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (condicion) {
        resolve("Hola mundo");
      } else {
        reject("Hubo un error");
      }
    }, 2000)
  );

const menajoError = async (condicion) => {
  try {
    const resultado = await esperar(condicion);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

console.log("1");
menajoError(false);
console.log("2");
