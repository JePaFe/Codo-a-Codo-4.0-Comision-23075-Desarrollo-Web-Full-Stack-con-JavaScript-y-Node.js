function Usuario(username, email, password, admin = false) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.admin = admin;

  this.saludar = () => console.log(`Hola ${this.username}`);
}

const user1 = new Usuario("User 1", "x@x.com", 1234);
user1.saludar();

const user2 = new Usuario("User 2", "xy@xy.com", 3434, true);
user2.saludar();

const user3 = new Usuario();
user3.username = "User 3";
user3.saludar();
