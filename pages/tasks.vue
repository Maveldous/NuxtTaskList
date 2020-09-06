<template>
  <div>
    <h1 :class="$style.task__title"> Tasks </h1>
    <div :class="$style.task__wrapper">
      <HeaderDefault />
      <HeaderItem />
    </div>
  </div>
</template>

<script>
import HeaderItem from '~~/components/common/HeaderItem'
import HeaderDefault from '~~/components/common/HeaderDefault'

export default {
  data () {
    return {
    }
  },
  components: {
    HeaderItem,
    HeaderDefault
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
.task__title {
  margin: 80px 0;
  text-align: center;
}
.task__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
