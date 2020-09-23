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
  margin-bottom: 10px;
}
.fixed-width {
  width: 321px;
}
input {
  border: 1.6px solid lightgray;
  border-radius: 5px;
  margin: 0px 15px 0px 15px;
  min-width: 170px;
  min-height: 30px;
  font-size: 16px;
  color: darkgray;
  font-weight: 300;
  padding: 10px;
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
  width: 44px;
  height: 44px;
  content: "";
  font-size: 40px;
  color: white;
  background: #61d5a7;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: lighter;
  padding-bottom: 4px;
}
</style>
