<template>
  <article :class="$style.item">
    <h3>Title</h3>
    <p>description</p>
    <p>DeadLine</p>
    <vs-radio v-model="picked" val="1">
          Option A
        </vs-radio>
        <vs-radio v-model="picked" val="2">
          Option B
        </vs-radio>
        <vs-radio v-model="picked" val="3">
          Option C
    </vs-radio>
  </article>
</template>

<script>

export default {
  data () {
    return {
      picked: ''
    }
  },
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    deadline: { type: Number, default: 24 }
  }
}
</script>

<style lang="scss" module>
.item {
  width: 55%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ddd;
}
</style>
