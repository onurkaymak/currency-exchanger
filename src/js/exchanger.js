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
                return error;
            });
    }

    static defineResults(apiResults) {
        console.log(apiResults);
        // if (Exchanger.currencies.includes(currentCurrency) && Exchanger.currencies.includes(convertToCurrency)) {
        //     console.log("yes");
        // } else {
        //     return console.log("no");
        // }

        if (this.currencies.includes(apiResults.base_code.toLowerCase())) {
            console.log('yes');
        } else {
            const errorMessage = "We don't have this currencie"
        }
    }
}