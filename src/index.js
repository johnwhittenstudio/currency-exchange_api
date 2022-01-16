import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-services';


function clearFields(){
  $('#USDamount').val("");
  $('.showInvalidNumberError').text("");
  $('.showWarning').text("");
  $('.showExchange').text("");
  $('.showErrors').text("");
  $('.showConversaionRate').text("");
}

$(document).ready(function() {
  $('#currencyConvert').click(function() {
    event.preventDefault();
    let currency = $('#selectCurrency').val();
    let amount = $('#USDamount').val();
    clearFields();
    if (isNaN(amount) || amount <= 0) {
      $('.showInvalidNumberError').text('Error! Please enter a number greater than 0.');
    }
    if (currency === "FNM") {
      $('.showWarning').text('Sorry, pal! We run a legit currency exchange business. Try the circus if you want funny money.');
    }

    let promise = CurrencyService.getExchange(currency, amount);
    promise.then(function(response){
      const body = JSON.parse(response);
      $('.showExchange').text(`${amount} USD exchanged to ${currency} = ${body.conversion_result}`); 
      $('.showConversionRate').text(`The conversion rate as of ${body.time_last_update_utc} is ${body.conversion_rate}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
    $(".footer").show();
  });
});
