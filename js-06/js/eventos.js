const h1 = document.querySelector("h1");

const h1Click = () => {
  console.log("Click en h1");
};

// h1.onclick = () => {
//   console.log("Click en h1");
// };

// ---

// const footerClick = () => {
//   console.log("Click en footer");
// };

// const footer = document.querySelector("footer");
// // footer.addEventListener("click", footerClick);
// footer.addEventListener("click", () => {
//   console.log("Click en footer");
// });

// ---

// const enlace = document.querySelector("a");
// enlace.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Click en enlace");
//   window.location = event.target.href;
// });

// ---

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreError = document.querySelector("#nombre-error");
  nombreError.textContent = "";

  let error = false;

  const nombre = document.querySelector("#nombre");
  if (nombre.value == "") {
    error = true;
    // alert("El nombre es obligatorio");
    nombreError.textContent = `El nombre es obligatorio`;
  }

  if (!error) {
    form.submit();
  }
});
