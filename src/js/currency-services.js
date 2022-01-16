export default class CurrencyService {
  static getExchange(currency, amount) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      console.log(request);
      const searchURL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", searchURL, true);
      request.send();
    });
  }
}
