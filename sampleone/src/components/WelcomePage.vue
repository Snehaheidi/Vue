<template>
  <div>
    <h1>Welcome Component</h1>
    <button @click="goToSimple">Go to Simple</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToSimple() {
      this.$router.push('/simple');
    },
  },
};
</script>
