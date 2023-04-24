// const saludar = function () {
//   console.log("Hola!!!");
// };

const user = {
  username: "User 1",
  email: "x@x.com",
  password: "Yn63_we3!",
  nombre: "Juan",
  "nombre completo": "Juan Pablo Garcia",
  //   saludar: saludar,
  //   saludar: function () {
  //     console.log("Hola!!!");
  //   };
  //   saludar: () => console.log("Hola!!"),
  saludar() {
    console.log("Hola " + this.nombre);
  },
};

user.saludar();

// for (const key in usuario1) {
//   if (typeof usuario1[key] != "function") {
//     console.log(key, usuario1[key]);
//   }
// }

let usuario2 = {
  nombre: "Maria",
  username: "User 1",
  email: "x@x.com",
  password: 1234,
  admin: false,
  saludar() {
    console.log("Hola " + this.nombre);
  },
};

usuario2.saludar();

usuario2 = {
  nombre: "Maria",
  email: "maria@x.com",
};

// console.log(usuario1.email);
// console.log(usuario1["email"]);

// console.log(usuario2.email);

// console.log(usuario1["nombre completo"]);

// usuario1.email = "y@y.com.ar";
// usuario2["email"] = "z@z.com";
