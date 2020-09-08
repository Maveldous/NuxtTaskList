<template>
  <form :class="$style.form">
    <h1> {{ title }} </h1>
    <vs-input
      v-model="userInfo.email"
      :class="$style.form__input"
      label-placeholder="Email"
      style="text-align: left;"
    />
    <vs-input
      v-model="userInfo.password"
      :class="$style.form__input"
      type="password"
      label-placeholder="Password"
      style="text-align: left;"
    />
    <nuxt-link
      v-if="title == 'Login'"
      to="/registration"
    >
      Haven't account?
    </nuxt-link>
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
        password: '11',
        email: '11'
      }
    }
  },
  props: {
    title: { type: String, default: 'Login' },
    color: { type: String, default: '' },
    submitForm: { default: '' }
  },
  beforeMount () {
    if (localStorage.getItem('isLogin')) {
      this.$router.push('/tasks')
    }
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
