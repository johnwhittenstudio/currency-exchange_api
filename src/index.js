import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-services';


function clearFields(){
  $('#search').val("");
  $('.showConversion').text("");
}

$('#currencySearch').click(function() {
  let search = $('#search').val();
  clearFields();
  let promise = CurrencyService.getSearch(search);
  promise.then(function(response){
    const body = JSON.parse(response);
    $('.showConversion').text(`The conversion rate from USD to ${body.response.target_code} is: ${body.response.conversion_result}`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});
