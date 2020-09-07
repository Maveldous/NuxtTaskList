<template>
  <form :class="$style.form">
    <h1> {{ title }} </h1>
    <vs-input
      v-model="userInfo.login"
      :class="$style.form__input"
      label-placeholder="Login"
      style="text-align: left;"
    />
    <vs-input
      v-model="userInfo.password"
      :class="$style.form__input"
      type="password"
      label-placeholder="Password"
      style="text-align: left;"
    />
    <vs-input
      v-if="title === 'Registration'"
      v-model="userInfo.email"
      :class="$style.form__input"
      label-placeholder="Email"
      style="text-align: left;"
    />
    <vs-button
      @click.prevent="submitForm(userInfo)"
      :class="$style.form__btn"
      :color="color"
      gradient
    >
      Submit
    </vs-button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        login: '',
        password: '',
        email: ''
      }
    }
  },
  props: {
    title: { type: String, default: 'Login' },
    color: { type: String, default: '' },
    submitForm: { default: '' }
  }
}
</script>

<style lang="scss" module>
.form{
  @include formContainer;
}
.form__input {
  margin: 10px 0;
}
.form__btn {
  margin-top: 25px;
  width: 100%;
}
</style>
