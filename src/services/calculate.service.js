export function calculate(loanAmount, interest, repaymentYears) {
  if (!loanAmount || !interest || !repaymentYears) return { monthlyCost: 0, months: 0, interest };
    const months = repaymentYears * 12;

    const monthlyCost = Math.round(loanAmount * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1))));

    // Uncomment lines below for debugging
    // console.log(loanAmount, interest, repaymentYears);
    // console.log(months, monthlyCost);
  return {
    monthlyCost,
    months,
    interest
  };
}
