import Exchanger from './js/exchanger';
import './css/styles.css';

const formHandler = async (event) => {
    event.preventDefault();
    let currentCurrency = event.target[0].value;
    let convertToCurrency = event.target[1].value;


    try {
        const apiResult = await Exchanger.getCurrency(currentCurrency, convertToCurrency);
        Exchanger.defineResults(apiResult, currentCurrency, convertToCurrency);
    } catch (error) {
        console.log(error);
    }

};


window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formHandler);
});