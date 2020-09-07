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
    registerUser (info) {

    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include globalContainer;
}
</style>
