const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /* Valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-value") /* Outras moedas */

    console.log(currencyselect.value)
    const dolarToday = 5.20
    const euroToday = 6.20
    const libraToday = 7.12

    if (currencyselect.value == "dolar") { // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencyselect.value == "euro") {  // Se o select estiver selecionado o valor de Euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencyselect.value == "libra") { // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}



function changeCurrency () {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    console.log("trocou a moeda")

    if (currencyselect.value == "dolar") {
        currencyName.innerHTML == "Dolar Americano"
        currencyImage.src = "./assets/USA.png"
    }
    if (currencyselect.value == "euro") {
        currencyName.innerHTML == "Euro"
        currencyImage.src = "./assets/EURO.png"
    }
    if (currencyselect.value == "libra") {
        currencyName.innerHTML == "Libra"
        currencyImage.src = "./assets/LIBRA.png"
    }
    convertValues ()
}
currencyselect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)