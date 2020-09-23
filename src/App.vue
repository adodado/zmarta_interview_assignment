<template>
  <div id="app">
    <div class="content">
      <div class="calculator">
        <DisplayField
          v-bind:label="monthlyCostLabel"
          v-bind:suffix="monthlyCostSuffix"
          v-bind:value="calculation.monthlyCost"/>
        <InputField
          v-bind:label="loanAmountLabel"
          v-bind:value="calculation.amount"/>
        <InputField
          v-bind:label="repaymentYearsLabel"
          v-bind:value="calculation.years"/>
        <SubmitButton v-bind:label="ctaLabel"/>
      </div>
    </div>
  </div>
</template>

<script>
import DisplayField from './components/DisplayField'
import InputField from './components/InputField'
import SubmitButton from './components/SubmitButton'
import { calculate } from './services/calculate.service'

export default {
  name: 'App',
  components: {
    DisplayField,
    InputField,
    SubmitButton
  },
  data () {
    const inputAmount = 250000
    const inputYears = 14
    const interest = 5.77
    return {
      calculation: calculate(inputAmount, interest, inputYears),
      inputAmount,
      interest,
      inputYears,
      monthlyCostLabel: 'Månadskostnad',
      monthlyCostSuffix: 'kr',
      loanAmountLabel: 'Lånebelopp',
      loanAmountSuffix: 'kr',
      repaymentYearsLabel: 'Återbetalningstid',
      repaymentYearsSuffix: 'år',
      ctaLabel: 'Ansök nu'
    }
  },
  methods: {
    calculateCost () {
      this.calculation = calculate(
        this.inputAmount,
        this.interest,
        this.inputYears
      )
    }
  }
}
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}
.calculator {
  border: 1px solid darkgray;
  padding: 20px;
}
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
