<template>
  <div>
    <div :class="$style.task__btns">
      <vs-button
        :class="$style.btn"
        @click.prevent="saveAll"
        flat
      >
        Save
      </vs-button>
      <vs-button
        :class="$style.btn"
        @click.prevent="logout"
        color="#7d33ff"
        flat
      >
        Logout
      </vs-button>
    </div>
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
      :class="[$style.taskCreate__btn, $style.btn]"
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
      dataObject: []
    }
  },
  components: {
    HeaderItem,
    HeaderDefault
  },
  methods: {
    addTask () {
      this.dataObject.push({
        title: '',
        description: '',
        deadline: '24',
        priority: '',
        state: 'New'
      })
    },
    saveAll () {
      const login = JSON.parse(localStorage.getItem('isLogin'))
      const uploadData = {
        ...login,
        links: this.dataObject
      }
      this.$axios.post('/auth/uploadInfo', uploadData)
    },
    logout () {
      localStorage.removeItem('isLogin')
      this.$router.push('/')
    }
  },
  async beforeMount () {
    const login = localStorage.getItem('isLogin')
    if (!login) {
      this.$router.push('/')
    }
    const responce = await this.$axios.post('/auth/getInfo', JSON.parse(login))
    this.dataObject = responce.data.data
  }
}
</script>

<style lang="scss" module>
.btn {
  width: 120px;
  height: 50px;
  font-size: 16px;
}
.task__btns {
  display: flex;
  justify-content: flex-end;
  background: #eee;
}
.task__title {
  margin: 40px 0;
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
  bottom: 20px;
  left: 20px;
  z-index: 100;
}
</style>
