const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /* Valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-value") /* Outras moedas */

    console.log(currencyselect.value)
    
    const dolarToday = 5.20
    const euroToday = 6.20
    const LibraToday = 7.20
    const bitcoinToday= 10000

    if (currencyselect.value == "Dolar") { // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencyselect.value == "Euro") {  // Se o select estiver selecionado o valor de Euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-La", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencyselect.value == "Libra") { // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibraToday)
    }
    if (currencyselect.value == "Bitcoin") { // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / dolarToday)
    }
  

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

currencyselect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencyselect.value == "Dolar") {
        currencyName.innerHTML == "Dolar Americano"
        currencyImage.src = "./assets/USA.png"
    }
    if (currencyselect.value == "Euro") {
        currencyName.innerHTML == "Euro"
        currencyImage.src = "./assets/EURO.png"
    }
    if (currencyselect.value == "Libra") {
        currencyName.innerHTML == "Libra Esterlina"
        currencyImage.src = "./assets/LIBRA.png"
    }

    convertValues()
}
