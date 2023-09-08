export const errorHandler = (error) => {
    let errorTitle = document.getElementById('error-title');
    let errorMessage = document.getElementById('error-message');

    if (error.status === 404) {
        // For the "If the query response doesn't include that particular currency" prompt, browser returns 404 for the unknown currencies.//
        errorTitle.innerText = `Error Code - ${error.status}`;
        errorMessage.innerText = 'Unsupported currency, please try again with different currency.';
    } else {
        // General error handling for other status codes.
        errorTitle.innerText = `Error Code - ${error.status}`;
        errorMessage.innerText = `${error.message}`;
    }

    document.getElementById('container-error').removeAttribute("class", "hidden");
};