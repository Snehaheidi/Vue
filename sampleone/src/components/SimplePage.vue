<template>
  <div>
    <h1>Simple Component</h1>
    <button @click="navigateToWelcome">Go to Welcome</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToWelcome() {
      this.$router.push('/welcome');
    },
  },
};
</script>

