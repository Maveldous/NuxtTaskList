<template>
  <tr :class="$style.item">
    <td :class="$style.tElem">{{title}}</td>
    <td :class="$style.tElem">{{description}}</td>
    <td :class="$style.tElem">{{deadline}}</td>
    <td :class="$style.tElem">{{priority}}</td>
    <td :class="$style.tElem">
      <vs-radio
        :class="$style.radioElem"
        v-model="picked"
        val="1"
      >
        New
      </vs-radio>
      <vs-radio
        :class="$style.radioElem"
        v-model="picked"
        val="2"
      >
        Processed
      </vs-radio>
      <vs-radio
        :class="$style.radioElem"
        v-model="picked"
        val="3"
      >
        Done
      </vs-radio>
    </td>
  </tr>
</template>

<script>

export default {
  data () {
    return {
      picked: 1
    }
  },
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    deadline: { type: Number, default: 24 },
    priority: { type: String, default: '' }
  }
}
</script>

<style lang="scss" module>
.item {
  border: 1px solid #ddd;
}
.tElem{
  // display: inline-block;
  width: 200px;
  max-width: 200px;
  height: 100px;
  text-align: center;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: scroll;
}
.radioElem {
  margin: 20px 40px;
  justify-content: left;
}
</style>
