<template>
  <div :class="$style.container">
    <form :class="$style.form">
      <h1> Registration Page </h1>
      <vs-input
        label-placeholder="Login"
        v-model="value"
        style="text-align: left;"
      />
      <vs-input
        label-placeholder="Password"
        v-model="value"
        style="text-align: left;"
      />
      <vs-button
        :class="$style.form__btn"
        color="rgb(70,201,58)"
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
