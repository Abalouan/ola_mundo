document.addEventListener("DOMContentLoaded", () => {
    const texto = document.body.querySelector("#texto");

    texto.addEventListener("click", () => {
        if(texto.textContent==="Ola mundo")
        texto.textContent="Hello World";
    else
        texto.textContent="Ola mundo";
    });
});


