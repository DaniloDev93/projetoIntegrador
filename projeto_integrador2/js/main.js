let altura = document.querySelector("#altura");
let peso = document.querySelector("#peso");
let btn = document.querySelector("#btn");
let btn_clean = document.querySelector("#clean");

let result = document.querySelector("#result-imc");

let confira = document.querySelector("#confira");
let table = document.querySelector(".table-imc");


const calculoImc = (altura, peso) => {
    let result = peso/(altura*altura);
    return result.toFixed(2,1);
}

const esvaziar = (alt, pes, res) => {
    const v = [
        alt.value = "", 
        pes.value = "", 
        res.innerHTML = "",
        alt.focus()
    ];

    return v;
}

btn.addEventListener("click", () => {
    if (altura.value != "" && peso.value != "") {
        let alt = altura.value;
        let p = peso.value;

        result.innerText = (calculoImc(alt,p));
        btn_clean.classList.remove("hide");
        confira.classList.remove("hide");
        table.classList.remove("hide");

        return;
    }

        alert("Preencha todos os campos!")
        return;
    
});


btn_clean.addEventListener("click", () => {
    esvaziar(altura, peso, result);
    btn_clean.classList.add("hide");
    confira.classList.add("hide");
    table.classList.add("hide");
});

