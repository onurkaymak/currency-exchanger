import { printResults } from "../index";

export default class Exchanger {
    static currencies = ["usd", 'eur', 'gbp', 'nok', 'sek', 'jpy', 'krw', 'aed', 'rub'];

    static getCurrency(currentCurrency = "usd") {
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currentCurrency}`)
            .then(function (response) {
                if (!response.ok) {
                    const errorMessage = `${response.status} ${response.statusText}`;
                    throw new Error(errorMessage);
                } else {
                    return response.json();
                }
            })
            .catch(function (error) {
                console.log('error in fetch catch');
                return error;
            });
    }

    static defineResults(apiResults, currentCurrency, convertToCurrency) {
        const responseCurrenciesArr = Object.keys(apiResults.conversion_rates);

        if (responseCurrenciesArr.includes(currentCurrency.toUpperCase())) {
            printResults([responseCurrenciesArr, currentCurrency, convertToCurrency]);
        } else {
            console.log("We don't have this currency!");
        }
    }
}