let num1 = 10;
let num2 = "10";

// if (num1 === num2) {
//   console.log("Las variables son iguales");
// }

// console.log(typeof num1);

let edad = 10;

// if (edad >= 13) {
//   console.log("Puede registrarse");
// } else {
//   console.log("Necesita permiso de un adulto");
// }

let semaforo = "verde";

// if (semaforo == "verde") {
//   console.log("Avanzar");
// } else if (semaforo == "amarillo") {
//   console.log("Precaucion");
// } else {
//   console.log("Detenerse");
// }

switch (semaforo) {
  case "verde":
    console.log("Avanzar");
    break;
  case "amarillo":
    console.log("Precaucion");
    break;
  default:
    console.log("Detenerse");
    break;
}
