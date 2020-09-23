<template>
  <div class="fixed-width">
    <div class="label">
      <!-- monthlyCostLabel -->
      {{ label }}
    </div>
    <div class="value">
      <!-- monthlyCost + monthlyCostSuffix -->
      {{ value }} {{ suffix }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayField',
  props: {
    label: {
      type: String
    },
    suffix: {
      type: String
    },
    value: {
      type: Number
    }
  }
}
</script>

<style scoped>
.fixed-width {
  width: 321px;
}
.label {
  font-weight: 700;
}
.value {
  font-weight: 200;
  font-size: 26px;
  font-style: italic;
}
</style>
