<template>
  <div id="app">
    <div class="content">
      <div class="calculator">
        <DisplayField />
        <InputField />
        <InputField />
        <SubmitButton />
      </div>
    </div>
  </div>
</template>

<script>
import DisplayField from "./components/DisplayField";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import calculate from "./services/calculate.service";

export default {
  name: "App",
  components: {
    DisplayField,
    InputField,
    SubmitButton
},
  data() {
    const inputAmount = 250000;
    const inputYears = 14;
    const interest = 5.77;
    return {
        monthlyCostValue = calculate(inputAmount,interest, inputYears),
        inputAmount,
        interest,
        inputYears,
        monthlyCostLabel: "Månadskostnad",
        monthlyCostSuffix: "kr",
        loanAmountLabel: "Lånebelopp",
        loanAmountSuffix: "kr",
        repaymentYearsLabel: "Återbetalningstid",
        repaymentYearsSuffix: "år",
        ctaLabel: "Ansök nu"
      }
    }
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}
</style>
