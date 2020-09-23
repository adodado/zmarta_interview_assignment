<template>
  <section>
    <div class="fixed-width">
      <div class="label">{{ label }}</div>
      <div class="input-content">
        <button class="calculator-button" v-on:click="$emit('decrease-value', id, step, minimum)">
          <span>-</span>
        </button>

        <input type="text" :value="formattedValue" readonly />

        <button class="calculator-button" v-on:click="$emit('increase-value', id, step, maximum)">
          <span>+</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    id: {
      type: Number
    },
    label: {
      type: String
    },
    suffix: {
      type: String
    },
    value: {
      type: Number
    },
    step: {
      type: Number
    },
    minimum: {
      type: Number
    },
    maximum: {
      type: Number
    }
  },
  computed: {
    formattedValue: function () {
      return `${this.value.toLocaleString()} ${this.suffix}`
    }
  }
}
</script>

<style scoped>
section {
  padding-top: 1rem;
  padding-bottom: 2rem;
}
.label {
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0.5rem;
}
.fixed-width {
  width: 20rem;
}
input {
  border: 0.1rem solid lightgray;
  border-radius: 0.5rem;
  margin: 0rem 0.8rem 0rem 0.8rem;
  min-width: 11rem;
  min-height: 2rem;
  font-size: 1rem;
  color: darkgray;
  font-weight: 300;
  padding: 0.5rem;
}
.input-content {
  display: flex;
  align-items: center;
}
.calculator-button {
  border: none;
  line-height: 1;
  overflow: hidden;
  display: inline-block;
  width: 4rem;
  height: 3rem;
  content: "";
  font-size: 2rem;
  color: white;
  background: #61d5a7;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: lighter;
  padding-bottom: 4px;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: #61d5a7;
}
</style>
