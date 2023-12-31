function calculateMortgage() {
    // Get the input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    // Calculate monthly interest rate
    const monthlyInterestRate = interestRate / 12;

    // Calculate number of payments
    const numberOfPayments = loanTerm * 12;

    // Calculate mortgage
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Display the result
    document.getElementById('monthlyPayment').innerHTML = '$' + monthlyPayment.toFixed(2);
}

$(document).ready(function() {
    var calculator = $(".calculator");

    $(window).on("scroll", function() {
        var calculatorTop = calculator.offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        if (calculatorTop < (scrollTop + windowHeight)) {
            calculator.addClass("slide-in");
        }
    });
});
