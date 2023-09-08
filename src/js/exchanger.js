import { printResults } from "../index";

export default class Exchanger {
    static currencies = ["usd", 'eur', 'gbp', 'nok', 'sek', 'jpy', 'krw', 'aed', 'rub'];

    static getCurrency(currentCurrency = "USD", currencyAmount, convertToCurrency) {
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currentCurrency}/${convertToCurrency}/5.52`)
            .then(function (response) {
                if (!response.ok) {
                    const errorStatus = `${response.status}`;
                    throw new Error(errorStatus);
                } else {
                    return response.json();
                }
            })
            .catch(function (error) {
                return error;
            });
    }

    static defineResults(apiResults, currentCurrency, convertToCurrency) {

        if (this.currencies.includes(currentCurrency.toLowerCase())) {
            printResults([apiResults, currentCurrency, convertToCurrency]);
        } else {
            console.log("We don't have this currency!");
        }
    }
}