// No pueden estar vacíos
let card = document.querySelector("#card");
let cvc = document.querySelector("#cvc");
let amount = document.querySelector("#amount");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let city = document.querySelector("#city");
let state = document.querySelector("#state");
let postalCode = document.querySelector("#postalCode");

let noPuedenEstarVacios = [card, cvc, amount, firstName, lastName, city, state, postalCode];

// Body del formulario
let bodyFormulario = document.querySelector("#bodyFormulario");

// Botón de send
let submitButton = document.querySelector("#submit");

// Formulario
let formulario = document.querySelector("#formulario");

// Acciones
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})

let yaClicado = false;
submitButton.addEventListener("click", () => {
    if (yaClicado) return;
    for (let elemento of noPuedenEstarVacios) {
        if (elemento.value === "") {
            let divError = document.createElement("div");
            let tituloError = document.createElement("h5");
            tituloError.classList.add("text-danger-emphasis");
            tituloError.textContent = "Some fields are missing"
            divError.classList.add("row", "p-3", "bg-danger-subtle", "rounded");
            divError.appendChild(tituloError);
            bodyFormulario.prepend(divError);
            yaClicado = true;
            return;
        }
    }
});
