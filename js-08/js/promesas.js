function esperar(condicion) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condicion) {
        resolve("Hola mundo");
      } else {
        reject("Hubo un error");
      }
    }, 2000);
  });
}

console.log("1");

esperar(true)
  .then((response) => console.log(response)) // resolve
  .catch((error) => console.log(error)) // reject
  .finally(() => console.log("Siempre me ejecuto"));

console.log("2");
