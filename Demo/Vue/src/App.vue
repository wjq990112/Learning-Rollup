<template>
  <div>
    <h1>{{ message }}</h1>
    <button class="button" @click="handleButtonClick">click me</button>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const message = ref('');
    const clicked = ref(false);

    const handleButtonClick = () => {
      clicked.value = !clicked.value;
    };

    watch([clicked], () => {
      if (clicked.value) {
        message.value = 'Hello World!';
      } else {
        message.value = 'Hello Vue!';
      }
    });

    return {
      message,
      clicked,
      handleButtonClick
    };
  }
});
</script>

<style>
.button {
  width: 60px;
  height: 30px;
  color: aqua;
  background: orange;
  border-color: transparent;
  outline-color: transparent;
  border-radius: 6px;
}
</style>
