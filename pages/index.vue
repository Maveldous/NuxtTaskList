<template>
  <div :class="$style.container">
    <mainForm :submitForm="loginUser" />
  </div>
</template>

<script>
import mainForm from '~~/components/forms/mainForm'

export default {
  components: {
    mainForm
  },
  methods: {
    async loginUser (info) {
      const responce = await this.$axios.post('/auth/login', info)
      localStorage.setItem('isLogin', JSON.stringify(responce.data))
      this.$router.push('/tasks')
    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include globalContainer;
}
</style>
