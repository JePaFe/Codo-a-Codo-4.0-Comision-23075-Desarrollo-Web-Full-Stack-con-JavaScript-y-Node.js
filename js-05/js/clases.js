class Usuario {
  constructor(username, email, password, admin = false) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.admin = admin;
  }

  //   saludar = function () {
  //     console.log(`Hola ${this.username}`)
  //   }

  //   saludar = () => console.log(`Hola ${this.username}`);

  saludar() {
    console.log(`Hola ${this.username}`);
  }
}

// const user1 = new Usuario("User 1", "x@x.com", 1234);
// user1.saludar();

const usuarios = [];

const user1 = new Usuario("Juan", "x@x.com", 1231);
usuarios.push(user1);

const user2 = new Usuario("Maria", "y@y.com", 1232);
usuarios.push(user2);

const user3 = new Usuario("Juana", "z@z.com", 1233);
usuarios.push(user3);

const user = usuarios.find((usuario) => usuario.email == "x@x.com");

console.log(usuarios);

setTimeout(() => {
  usuarios.sort((a, b) => {
    if (a.username > b.username) {
      return 1;
    }
    if (a.username < b.username) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  console.log(usuarios);
}, 3000);
