<template>
  <div :class="$style.container">
    <mainForm
      title="Registration"
      color="rgb(70,201,58)"
      :submitForm="registerUser"
    />
  </div>
</template>

<script>
import mainForm from '~~/components/forms/mainForm'

export default {
  components: {
    mainForm
  },
  methods: {
    async registerUser (info) {
      try {
        await this.$axios.$post('http://localhost:3001/api/auth/register', info)
        const responce = await this.$axios.post('/auth/login', info)
        localStorage.setItem('isLogin', JSON.stringify(responce.data))
        this.$router.push('/tasks')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include globalContainer;
}
</style>
