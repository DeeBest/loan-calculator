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

  let numberLoanAmount = Number(loanAmount);
  let numberInterestRate = Number(interestRate);
  let numberDuration = Number(duration);

  let interest =
    (numberLoanAmount * (numberInterestRate * 0.01)) / numberDuration;

  let monthlyInstallment = (
    numberLoanAmount / numberDuration +
    interest
  ).toFixed(2);

  monthlyPaymentOutput.textContent = '$' + monthlyInstallment;
}
