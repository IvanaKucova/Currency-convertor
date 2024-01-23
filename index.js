let currencyFirstEl = document.getElementById("currency-first");
let worthFirstEl = document.getElementById("worth-first");
let currencySecondEl = document.getElementById("currency-second");
let worthSecondEl = document.getElementById("worth-second");
let exchangeRateEl = document.getElementById("exchange-rate");

updateRate()
function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/7bb234c5d1c9f5722f9d25fe/latest/${currencyFirstEl.value}`)
    .then((response)=>response.json())
    .then((data)=>{
        let rate = data.conversion_rates[currencySecondEl.value];
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
     worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
    });

}
currencyFirstEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);