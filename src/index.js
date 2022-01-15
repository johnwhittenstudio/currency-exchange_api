import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-services';


// function clearFields(){
//   $('#selectCurrency').val("");
//   $('.showConversion').text("");
// }

$(document).ready(function() {
  $('#currencyConvert').click(function() {
    event.preventDefault();
    let currency = $('#selectCurrency').val();
    let amount = $('#USDamount').val();
    // clearFields();

    let promise = CurrencyService.getExchange(currency, amount);
    promise.then(function(response){
      const body = JSON.parse(response);
      $('.showExchange').text(`The conversion of ${amount} USD to ${currency} = ${body.conversion_result} at a conversion rate of ${body.conversion_rate}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
