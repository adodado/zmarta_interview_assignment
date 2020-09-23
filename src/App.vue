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
          v-bind:value="calculation.amount"
          v-bind:suffix="loanAmountSuffix"
          v-bind:id="1"
          v-bind:step="10000"
          v-bind:minimum="15000"
          v-bind:maximum="1000000"
          v-on:decrease-value="decreaseValue"
          v-on:increase-value="increaseValue"/>
        <InputField
          v-bind:label="repaymentYearsLabel"
          v-bind:value="calculation.years"
          v-bind:suffix="repaymentYearsSuffix"
          v-bind:id="2"
          v-bind:step="1"
          v-bind:minimum="1"
          v-bind:maximum="25"
          v-on:decrease-value="decreaseValue"
          v-on:increase-value="increaseValue"/>
        <SubmitButton
          v-bind:label="ctaLabel"
          v-on:submit="submit"/>
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
    let inputAmount = 250000
    let inputYears = 14
    let interest = 5.77
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
    },
    increaseValue (id, step, maximum) {
      // Uncomment lines below for debugging
      // console.log(id, step, maximum)
      switch (id) {
        case 1:
          const amount = this.inputAmount + step
          this.inputAmount = (amount <= maximum ? amount : this.inputAmount)
          break
        case 2:
          const years = this.inputYears + step
          this.inputYears = (years <= maximum ? years : this.inputYears)
          break
      }
      // Uncomment lines below for debugging
      // console.log(this.inputAmount, this.inputYears)
      this.calculateCost()
    },
    decreaseValue (id, step, minimum) {
      // Uncomment lines below for debugging
      // console.log(id, step, minimum)
      switch (id) {
        case 1:
          const amount = this.inputAmount - step
          this.inputAmount = (amount >= minimum ? amount : this.inputAmount)
          break
        case 2:
          const years = this.inputYears - step
          this.inputYears = (years >= minimum ? years : this.inputYears)
          break
      }
      // Uncomment lines below for debugging
      // console.log(this.inputAmount, this.inputYears)
      this.calculateCost()
    },
    submit () {
      window.location.href = 'https://www.zmarta.se'
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
