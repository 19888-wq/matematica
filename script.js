const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const bttSomar = document.getElementById("bttsomar");
const bttLimpar = document.getElementById("bttlimpar");
const resultado = document.getElementById("resultado");

/* Como a Função não é reutilizável vamos usar arrow function*/

bttSomar.addEventListener("click", () => {
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let soma = a + b;
    resultado.textContent = `${a} + ${b} = ${soma}`;
});

bttlimpar.addEventListener("click", () => {
    numero1.value = '';
    numero2.value = '';
});

//verififca se o navegador suporta o service worker

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js")
            .then((registration) => {
                console.log("service worker registrado com sucesso:", registration.scope);
            })
            .catch((error) => {
                console.log("falha ao registrar o service worker:", error);
            });
    });
}