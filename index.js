const currentYear = new Date().getFullYear();
const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created by \xA9Simphiwe${currentYear}.`;

function calculateLoan() {
  const loanAmount = document.getElementById('loan-amount').value;
  const interestRate = document.getElementById('interest-rate').value;
  const duration = document.getElementById('duration').value;
  const monthlyPaymentOutput = document.getElementById(
    'monthly-payment-output'
  );
  const errorDisplay = document.getElementById('error-display');

  let numberLoanAmount = Number(loanAmount);
  let numberInterestRate = Number(interestRate);
  let numberDuration = Number(duration);

  if (
    numberLoanAmount >= 1 &&
    numberLoanAmount <= 500000 &&
    numberDuration >= 1 &&
    numberDuration <= 72 &&
    numberInterestRate >= 1 &&
    numberInterestRate <= 100
  ) {
    let interest =
      (numberLoanAmount * (numberInterestRate * 0.01)) / numberDuration;

    let monthlyInstallment = (
      numberLoanAmount / numberDuration +
      interest
    ).toFixed(2);

    monthlyPaymentOutput.textContent = '$' + monthlyInstallment;
    monthlyPaymentOutput.style.color = '#404650';
  } else {
    monthlyPaymentOutput.style.color = '#c63937';
    monthlyPaymentOutput.textContent = 'Please put correct details.';
  }
}
