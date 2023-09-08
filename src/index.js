import Exchanger from './js/exchanger';
import './css/styles.css';


export const printResults = (results, currencyAmount) => {
    const text = `
        ${currencyAmount} ${results.base_code} = ${results.conversion_result} ${results.target_code}, conversion rate is: ${results.conversion_rate}.
        `;
    document.getElementById("container-results").innerText = text;
};

const formHandler = (event) => {
    event.preventDefault();
    let currentCurrency = event.target[0].value.toUpperCase();
    let currencyAmount = event.target[1].value;
    let convertToCurrency = event.target[2].value.toUpperCase();

    if (currencyAmount === "") {
        return console.log("amount cannot be zero!");
    } else {
        Exchanger.getCurrency(currentCurrency, currencyAmount, convertToCurrency)
            .then(function (response) {
                console.log(response);
                if (response.result) {
                    printResults(response, currencyAmount);
                } else {
                    console.log('bad');
                }
            });
    }
};


window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formHandler);
});