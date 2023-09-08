import Exchanger from './js/exchanger';
import { errorHandler } from './js/errorHandler';
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

    document.getElementById('container-error').setAttribute("class", "hidden");
    document.getElementById('container-results').setAttribute("class", "hidden");

    if (currencyAmount === "") {
        errorHandler({ status: 400, message: 'Please select an amount and try again.' });
    } else {
        Exchanger.getCurrency(currentCurrency, currencyAmount, convertToCurrency)
            .then(function (response) {
                if (response.result) {
                    printResults(response, currencyAmount);
                    document.getElementById('container-results').removeAttribute("class", "hidden");
                } else {
                    errorHandler(response);
                }
            });
    }
};

window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formHandler);
});