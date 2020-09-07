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
      // http://localhost:3001/api/auth/register
      await this.$axios.$post('http://localhost:3001/api/auth/register', info)
    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include globalContainer;
}
</style>
