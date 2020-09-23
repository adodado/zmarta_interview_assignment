<template>
    <button class="cta-button">
  <div class="button-container">
    <div style="margin-left: 2rem;">{{ label }}</div>
    <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" style="margin-left: 10rem;scale:3;"/>  </div></button>
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
.cta-button {
  min-width: 320px;
  margin: 30px 0px;
  border-radius: 17px;
  background-color: #61d5a7;
  border: 0px;
  color: #fff;
  font-size: larger;
  min-height: 50px;
  font-style: italic;
  font-size: 16px;
}
</style>
