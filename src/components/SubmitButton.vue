<template>
    <button class="cta-button" v-on:click="$emit('submit')">
  <div class="button-container">
    <div style="margin-left: 2rem;">{{ label }}</div>
    <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" class="icon"/>  </div></button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  align-items: center;
  }
.icon {
  margin-left: 10rem;
  scale:3;
  stroke: #61d5a7;
  stroke-width: 3rem;
  }
.cta-button {
  min-width: 20rem;
  margin: 2rem 0rem;
  border-radius: 2rem;
  background-color: #61d5a7;
  border: none;
  color: #fff;
  min-height: 3rem;
  font-style: italic;
  font-size: 1rem;
}
</style>
