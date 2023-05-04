function menajoError(condicion) {
  try {
    if (condicion) {
      console.log("Todo OK");
    } else {
      throw new Error("Algo salio mal");
    }
  } catch (error) {
    console.log(error);
  }
}

menajoError(false);

console.log("1");
