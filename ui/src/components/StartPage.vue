<template>
  <div class="hello">
        <input placeholder="username" v-model="username"/>
        <button v-on:click="onClick">Проверить</button>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  data() {
    return {
      username:''
    };
  },
  methods: {
    onClick() {
      let a = this.$api.check(this.username);

      a.then(response => {
        if (response.success) {
          if (response.check === true) {
            this.$router.push('/success/' + this.username);
          } else {
            this.$router.push('/notfound/' + this.username);
          }
        } else {
          console.log(response.reason);
        }
      });
    },
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
