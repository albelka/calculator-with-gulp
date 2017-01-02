var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $('#add').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var calculatorAdd = new Calculator("green");
    var output = calculatorAdd.add(number1, number2);
    $('#solution').append("<li>" + output + "</li>");
  });
  $('#subtract').submit(function(event){
    event.preventDefault();
    var subtract1 = parseInt($("#subtract1").val());
    var subtract2 = parseInt($("#subtract2").val());
    var calculatorSubtract = new Calculator("green");
    var output = calculatorSubtract.subtract(subtract1, subtract2);
    $('#solution').append("<li>" + output + "</li>");
  });
  $('#multiply').submit(function(event){
    event.preventDefault();
    var multiply1 = parseInt($("#multiply1").val());
    var multiply2 = parseInt($("#multiply2").val());
    var calculatorMultiply = new Calculator("green");
    var output = calculatorMultiply.multiply(multiply1, multiply2);
    $('#solution').append("<li>" + output + "</li>");
  });
  $('#divide').submit(function(event){
    event.preventDefault();
    var divide1 = parseInt($("#divide1").val());
    var divide2 = parseInt($("#divide2").val());
    var calculatorDivide = new Calculator("green");
    var output = calculatorDivide.divide(divide1, divide2);
    $('#solution').append("<li>" + output + "</li>");
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
