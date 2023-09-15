# Currency Exchanger

#### A currency exchange application where users can select an amount for the supported currencies and get converted currency responses.

#### By [Onur Kaymak](https://onurkaymak.com)

## Technologies Used

- HTML5
- CSS
- JavaScript
- Node.js
- Git
- NPM
- ESLint
- ExchangeRate API
- VS Code

## Description

An independent project assignment for [Epicodus](https://onurkaymak.com), project is about Asynchrony and APIs in JavaScript.

## Setup/Installation Requirements

## IMPORTANT:

### Create an API KEY:

You will need an API key to view this project, to get a valid API key, follow the instructions below;

-Visit the ExchangeRate-API site. Input your email address and click the "Get Free Key" button, here is the link for [ExchangeRate-API](https://www.exchangerate-api.com/)

- After you successfully created your account, navigate into your account from the navigation bar on the top of the page, click My API keys to navigate.

- You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"

- At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.

- After generating your API key, follow the instructions below to setup the project on your computer, please note that you will need to use the generated API key in setup instructions.

### Clone the project in your computer:

- Clone this project from the provided GitHub repository: [Repository Link](https://github.com/onurkaymak/currency-exchanger).

- Navigate into the project's folder in your terminal.

- While you are in the root level of the project folder, create a file called ".env". This is a file where you need to store your generated API key

- .env extension is added in the .gitignore file and Webpack to protect your API key, you don't need to take any extra step for this.

- While you are in the .env file, type "API_KEY=" and store your generated API key without any empty space (EX: API_KEY=YOURGENERATEDAPIKEY).

- Please note that you need both Node.js and NPM are installed in your local machine to install all the dependencies to run this app.

- While you are in the root level of the project folder, type `$ npm install` in your terminal to download all the necessary dependencies.

- Once NPM install all the dependencies, you can type `$ npm run build` in your terminal, this will let Webpack to bundle application files.

- Finally, you can type `$ npm run start`, this will let Webpack to start the application in your browser.

- You can always check package.json file to see full list of dependencies and scripts.

## Known Bugs

There is no known bugs.

## License

MIT License

Copyright (c) [2023] [Onur Kaymak]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
