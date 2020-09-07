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
      const responce = await this.$axios.$post('http://localhost:3001/api/auth/register', info)
      console.log(responce)
    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include globalContainer;
}
</style>
