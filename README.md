# CURRENCY EXCHANGE API

## by _**John Whitten**_

### _January 13, 2022_

#### _This is a web-based application wherein the user can type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, this application will make an API call to the Exchange Rate API._

## Technologies Used
- _Babel 7.6.4_
- _Bootstrap 5.1.3_
- _CSS_
- _css-loader 3.2.0_
- _eslint 6.3.0_
- _eslint-loader 3.0.0_
- _file-loader 1.1.6_
- _html-loader 0.5.5_
- _HTML_
- _package-json_
- _Javascript_
- _Jest 24.9.0_
- _JQuery 3.6.0_
- _Node.js_
- _Node Package Manager 6.14.9_
- _popper.js 1.16.1_
- _style-loader 1.0.0_
- _webpack 4.39.3_
- _webpack-cli 3.3.8_
- _webpack-dev-server 3.8.0_

## Project Title: Currency Exchange API
## Project Objectives
For this section's project, create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API.

Navigate to the site to get a free key. Note that while the "Open Access" plan doesn't require an API key, it is heavily rate limited. You are expected to get an API key through the "Free Plan" - (and to protect that key in your application using environmental variables).

Here are the following things your application must do. Read through the list carefully to make sure you add all needed functionality!

- A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won.
- Users should be able to convert U.S. currency into at least 5 other types of currency.
- If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
- If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

## Further Exploration
If basic objectives have been completed with time to spare, consider adding additional features, such as:

- Allow users to convert currency between all available currency types.
- Allow users to convert currency both to and from U.S. dollars.
- Cache the API's results - so you only need to make the call once as long as a user is on the site. Try using session storage for this. If exchange rates are successfully being stored in session storage, an API call shouldn't be made. Instead, the rates can be grabbed directly from session storage.
- Use a dropdown menu for currencies.

## Creating API Keys
You will need to make an account and get an API key. The "Free Plan" allows for 2000 API calls per month.

- _Visit the [ExchangeRate-API](https://www.exchangerate-api.com/) site. Input your email address and click the "Get Free Key" button._

- _You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click ```"Get Started!"```_

- _At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month._

## Project Setup/Installation Instructions
- _Open the terminal on your local computer._

- _Navigate to the parent directory of your preference._

- _Clone this project using ```$ git clone https://github.com/johnwhittenstudio/currency-exchange_api```_

- _Navigate to the top level of the directory with the command ```$ cd currency-exhange_api```_

- _Make sure you have installed [Node js](https://nodejs.org/en/)_

- _Run command ``` $ npm install``` to install all dependencies._

- _Create file for storing environmental variables you want to keep secret (such as an API key) ``` $ touch .env```_

- _Add the following line of code to the .env file ```API_KEY=insert-your-API-key-here``` where you substitute the API key you got by following the instructions above for the "insert-your-API-key-here". The following is an example using a fake API key: ```API_KEY=1234567890```_

- _Run the command ```$ npm run build```_

- _Run the command ```$ npm run start``` to launch on a browser._

## Additional Setup/Installation Note for Windows Users
- This environment was created on a Mac. For it to work properly in your local environment make the following change:

- _Update package.json, line 8 to: "start": "npm run build & webpack-dev-server --open --mode development"_

## Known Bugs
- _None._

## License
[MIT License](https://opensource.org/licenses/MIT) Published _**2022**_ _**John Whitten**_

## Contact Information
_If you encounter any issues with this site, please contact John Whitten at [johnwhitten.studio@gmail.com](mailto:johnwhitten.studio@gmail.com)_