<template>
  <div :class="$style.container">
    <form :class="$style.form">
      <h1> Login Page </h1>
      <vs-input
        label-placeholder="Login"
        v-model="login"
        style="text-align: left;"
      />
      <vs-input
        label-placeholder="Password"
        v-model="password"
        style="text-align: left;"
      />
      <vs-button
        :class="$style.form__btn"
        gradient
      >
        Submit
      </vs-button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      password: ''
    }
  },
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include globalContainer;
}
.form{
  @include formContainer;
}
.form__btn {
  margin-top: 25px;
  width: 100%;
}
</style>
