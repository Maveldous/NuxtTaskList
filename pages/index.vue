<template>
  <div :class="$style.container">
    <mainForm :submitForm="loginUser" />
  </div>
</template>

<script>
import mainForm from '~~/components/forms/mainForm'

export default {
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  },
  components: {
    mainForm
  },
  methods: {
    loginUser (info) {
      console.log(info)
    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include globalContainer;
}
</style>
