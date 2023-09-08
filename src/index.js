import Exchanger from './js/exchanger';
import './css/styles.css';


export const printResults = (results) => {
    console.log(results); //// REFLECT THE RESULTS
};

const formHandler = async (event) => {
    event.preventDefault();
    let currentCurrency = event.target[0].value;
    let convertToCurrency = event.target[1].value;

    // try {
    //     const apiResult = await Exchanger.getCurrency(currentCurrency, convertToCurrency);
    //     Exchanger.defineResults(apiResult, currentCurrency, convertToCurrency);
    // } catch (error) {
    //     console.log(error, 'index.js catch');
    // }



    const response = await Exchanger.getCurrency(currentCurrency, convertToCurrency);
    if (response.main) {
        console.log('print results');
    } else {
        console.log('print errors');
    }

};


window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formHandler);
});