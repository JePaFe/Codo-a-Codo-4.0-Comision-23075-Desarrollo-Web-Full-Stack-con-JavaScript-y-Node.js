const parrafo = document.getElementById("parrafo");
// console.log(parrafo);

const destacado = document.querySelector(".destacado");
// console.log(destacado);

const parrafos = document.querySelectorAll("main p");
// console.log(parrafos);

// const section = document.createElement("section");
// const h2 = document.createElement("h2");
// h2.innerText = "Seccion 2";

// section.appendChild(h2);

// const body = document.querySelector("body");
// body.appendChild(section);

// ---

const html = `
    <section>
        <h2>Seccion 2</h2>
    </section>
`;

const body = document.querySelector("body");
body.innerHTML += html;
