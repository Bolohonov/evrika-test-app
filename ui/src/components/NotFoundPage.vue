<template>
  <div className="hello">
    <div>Пользователя {{ $route.params.msg }} нет</div>
    <button v-on:click="onClick">Назад</button>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
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