"use strict";
var hours;
var wage;
var gross;
var federalIncome;
var stateIncome;
var socialSecurity;
var medicare;
var stateDisablitiy;
var totalTax;
var takeHome;
$(document).ready(function (){
  $("#submit").click(function(){

    hours = $("#hoursWorked").val();
    wage = $("#hourlyWages").val();
    hours = parseInt(hours);
    wage = parseInt(wage);
    console.log(parseInt(hours));
    if (document.getElementById("single").checked) {
      $("#validatonOne").html("");
      if (document.getElementById("married").checked == false) {
        if (parseInt(wage) >= 1 || (parseInt(hours) >= 1)){
          $("#validatonTwo").html("");



      document.getElementById("married").checked = false;
      gross = hours * wage;
      gross = parseInt(gross);
      $("#grossIncome").html(gross);
      //Federal Income Tax
      federalIncome = gross *  0.0824;
      federalIncome = parseInt(federalIncome);
      // State Income
      stateIncome = gross * 0.0169;
      stateIncome = parseInt(stateIncome);
      //Social Security
      socialSecurity = gross * 0.062;
      socialSecurity = parseInt(socialSecurity);
      //Medicare
      medicare = gross * 0.0145;
      medicare = parseInt(medicare);
      //State disablity Tax
      stateDisablitiy = gross * 0.01
      stateDisablitiy = parseInt(stateDisablitiy)
      // Total Tax payed
      totalTax = federalIncome + stateIncome + socialSecurity + medicare + stateDisablitiy;
      totalTax = parseInt(totalTax);
      // Take Home salary
      takeHome = gross - totalTax;
      takeHome = parseInt(takeHome);
      //START POSTING RESULT
      $("#federalIncomeTax").html(federalIncome);
      $("#stateIncomeTax").html(stateIncome);
      $("#socialSecurityTax").html(socialSecurity);
      $("#medicareTAx").html(medicare);
      $("#stateDisablitiyTax").html(stateDisablitiy);
      $("#totalTaxPayed").html(totalTax);
      $("#takeHomeSalary").html(takeHome);

    }
    else {
      $("#validatonTwo").html("Please enter Your Hourly wage");
      $("#validatonTwo").css("color", "red");
    }
    }
    else {
      $("#validatonOne").html("OOPS! You have to Select One of them");
      $("#validatonOne").css("color", "red");
    }

    }
    else if(document.getElementById("married").checked) {
      document.getElementById("single").checked = false;
      gross = hours * wage;
      gross = parseInt(gross);
      $("#grossIncome").html(gross);
      //Federal Income Tax
      federalIncome = gross *  0.0479;
      federalIncome = parseInt(federalIncome);
      // State Income
      stateIncome = gross * 0.009;
      stateIncome = parseInt(stateIncome);
      //Social Security
      socialSecurity = gross * 0.062;
      socialSecurity = parseInt(socialSecurity);
      //Medicare
      medicare = gross * 0.0145;
      medicare = parseInt(medicare);
      //State disablity Tax
      stateDisablitiy = gross * 0.01
      stateDisablitiy = parseInt(stateDisablitiy)
      // Total Tax payed
      totalTax = federalIncome + stateIncome + socialSecurity + medicare + stateDisablitiy;
      totalTax = parseInt(totalTax);
      // Take Home salary
      takeHome = gross - totalTax;
      takeHome = parseInt(takeHome);
      //START POSTING RESULT
      $("#federalIncomeTax").html(federalIncome);
      $("#stateIncomeTax").html(stateIncome);
      $("#socialSecurityTax").html(socialSecurity);
      $("#medicareTAx").html(medicare);
      $("#stateDisablitiyTax").html(stateDisablitiy);
      $("#totalTaxPayed").html(totalTax);
      $("#takeHomeSalary").html(takeHome);


    }

    else{
      $("#validatonOne").html("This field is required, Please select one!");
      $("#validatonOne").css("color", "red");
    }

    // gross = hours * wage;
    // gross = parseInt(gross);
    // console.log(gross);
    // $("#federalIncome").html(gross);
    // $("#federalIncome").css("color", "red");
    //   $("#federalIncome").css("font-size", "50px");
    //
    // $("#grossIncome").html(gross);

});
//Create PDF and Download



  //clear Form
  $("#clearEverything").click(function (){

  });
});
