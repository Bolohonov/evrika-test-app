<template>
  <div class="hello">
      <div>Пользователь {{ $route.params.msg }} есть</div>
      <button v-on:click="onClick">Назад</button>
  </div>
</template>

<script>
export default {
  name: "SuccessPage",
  props: {
    msg: String
  },
  methods: {
    onClick() {
      this.$router.push('/');
    },
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>