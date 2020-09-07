<template>
  <div>
    <h1 :class="$style.task__title"> Tasks </h1>
    <table :class="$style.task__wrapper">
      <HeaderDefault />
      <tbody>
        <HeaderItem
          title="NewTitle"
          description="NewDescription"
          :deadline="24"
          priority="low"
        />
      </tbody>
    </table>
    <vs-button
      :class="$style.taskCreate__btn"
      relief
      success
    >
      Create Task
    </vs-button>
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
.taskCreate__btn {
  position: absolute;
  width: 120px;
  height: 50px;
  bottom: 20px;
  left: 20px;
  z-index: 100;
  font-size: 16px;
}
</style>
