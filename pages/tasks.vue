<template>
  <div>
    <h1 :class="$style.task__title"> Tasks </h1>
    <table :class="$style.task__wrapper">
      <HeaderDefault />
      <tbody>
        <HeaderItem
          v-for="(item, index) in dataObject"
          v-model="dataObject[index]"
          :key="index"
          :objectData="item"
        />
      </tbody>
    </table>
    <vs-button
      @click.prevent="addTask"
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
      dataObject: {}
    }
  },
  components: {
    HeaderItem,
    HeaderDefault
  },
  methods: {
    async addTask () {
      // console.log(this.dataObject)
      const login = JSON.parse(localStorage.getItem('isLogin'))
      const uploadData = {
        ...login,
        links: this.dataObject
      }
      console.log(uploadData)
      const responce = await this.$axios.post('/auth/uploadInfo', uploadData)
      console.log(responce)
    }
  },
  async beforeMount () {
    const login = localStorage.getItem('isLogin')
    if (!login) {
      this.$router.push('/')
    }
    const responce = await this.$axios.post('/auth/getInfo', JSON.parse(login))
    this.dataObject = responce.data.data
  },
  watch: {
    async dataObject () {
      const login = JSON.parse(localStorage.getItem('isLogin'))
      const uploadData = {
        ...login,
        links: this.dataObject
      }
      console.log(uploadData)
      const responce = await this.$axios.post('/auth/uploadInfo', uploadData)
      console.log(responce)
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
