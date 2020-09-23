<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import DisplayField from './components/DisplayField'
import InputField from './components/InputField'
import CalculatorButton from './components/CalculatorButton'

export default {
  name: 'App',
  components: {
    DisplayField,
    InputField,
    CalculatorButton
  }
}
</script>

<style>
#app {
	font-family: 'Open Sans', sans-serif;
}
</style>
