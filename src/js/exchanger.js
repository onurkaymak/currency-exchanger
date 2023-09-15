import { customError } from "./customError";

export default class Exchanger {
    static currencies = ["usd", 'eur', 'gbp', 'nok', 'sek', 'jpy', 'krw', 'aed', 'rub'];

    static getCurrency(currentCurrency, currencyAmount, convertToCurrency) {
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currentCurrency}/${convertToCurrency}/${currencyAmount}`)
            .then(async function (response) {
                if (!response.ok) {
                    const errorCode = response.status;
                    const errorParsed = await response.json();
                    const errorType = errorParsed['error-type'];

                    throw new customError(errorCode, errorType); //Defined custom error class that extends from Error class for better error handling.
                } else {
                    return response.json();
                }
            })
            .catch(function (error) {
                return error;
            });
    }
}