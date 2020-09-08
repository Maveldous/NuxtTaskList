<template>
  <form :class="$style.form">
    <h1> {{ title }} </h1>
    <p v-if="errors.length">
      <b>Пожалуйста исправьте указанные ошибки:</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>
    <vs-input
      v-model="userInfo.email"
      :class="$style.form__input"
      label-placeholder="Email"
      style="text-align: left;"
      required
    >
      <template v-if="!validEmail" #message-danger>
        invalid email
      </template>
    </vs-input>
    <vs-input
      v-model="userInfo.password"
      :class="$style.form__input"
      type="password"
      label-placeholder="Password"
      style="text-align: left;"
      required
    >
      <template v-if="!userInfo.password" #message-danger>
        required
      </template>
    </vs-input>
    <nuxt-link
      :to=" title == 'Login' ? '/registration' : '/' "
    >
      {{ title == 'Login' ? 'Haven\'t account yet?' : 'Back to login' }}
    </nuxt-link>
    <vs-button
      @click.prevent="submitForm(userInfo)"
      :class="$style.form__btn"
      :color="color"
      gradient
      :disabled="userInfo.password && !validEmail"
    >
      Submit
    </vs-button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      errors: [],
      userInfo: {
        password: '',
        email: ''
      }
    }
  },
  computed: {
    validEmail () {
      // eslint-disable-next-line
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userInfo.email)
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
