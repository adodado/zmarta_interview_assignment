export const calculate = (amount, interest, years) => {
  if (!amount || !interest || !years) return { monthlyCost: 0, months: 0, interest }
  const months = years * 12

  const monthlyCost = Math.round(amount * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1))))

  // Uncomment lines below for debugging
  // console.log(loanAmount, interest, repaymentYears);
  // console.log(months, monthlyCost);
  return {
    monthlyCost,
    amount,
    years
  }
}
