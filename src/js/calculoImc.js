let inputPeso = document.getElementById('peso');
let inputAltura = document.getElementById('altura');
let spanResultado = document.getElementById('resultadoImpresso');
let interpretacao = document.querySelectorAll('#interpretacao')

const btnCalcular = document.getElementById('calcular');
const btnLimpar = document.getElementById('limpar');



btnCalcular.addEventListener('click', () => {
    let peso = inputPeso.value
    let altura = inputAltura.value

    let imcCalculado = peso / (altura * altura)
    let imcDefinido = imcCalculado.toFixed(2)

    console.log(imcDefinido)

    spanResultado.innerHTML = `${imcDefinido}`

    if (imcDefinido < 18.5) {
        interpretacao[0].style.display = "block"
    } if (imcDefinido > 18.5 & imcDefinido < 24.9) {
        interpretacao[1].style.display = "block"
    } if (imcDefinido >= 25 & imcDefinido <= 29.9 ) {
        interpretacao[2].style.display = "block"
    } if (imcDefinido >= 30 & imcDefinido <= 39.9 ) {
        interpretacao[3].style.display = "block"
    } if (imcDefinido >= 40) {
        interpretacao[4].style.display = "block"
    }
})

btnLimpar.addEventListener("click", ()=> {
    location.reload()
})


