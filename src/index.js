import Exchanger from './js/exchanger';
import './css/styles.css';


export const printResults = (results) => {
    console.log(results); //// REFLECT THE RESULTS


    // document.getElementById("container-results").innerText;
};

const formHandler = (event) => {
    event.preventDefault();
    let currentCurrency = event.target[0].value.toUpperCase();
    let currencyAmount = event.target[1].value;
    let convertToCurrency = event.target[2].value.toUpperCase();


    Exchanger.getCurrency(currentCurrency, currencyAmount, convertToCurrency)
        .then(function (response) {
            console.log(response);
            // if (response.result) {
            //     // Exchanger.defineResults(response.conversion_rates, currentCurrency, convertToCurrency);
            //     printResults([response.conversion_rates, currentCurrency, convertToCurrency]);
            // } else {
            //     console.log('bad');
            // }
        });
};


window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formHandler);
});