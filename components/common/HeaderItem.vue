<template>
  <tr :class="$style.item">
    <td :class="$style.tElem">
      <vs-input
        v-model="objectData.title"
        :disabled="disabled"
      />
    </td>
    <td :class="$style.tElem">
      <vs-input
        v-model="objectData.description"
        :disabled="disabled"
      />
    </td>
    <td :class="$style.tElem">
      <vs-input
        v-model="objectData.deadline"
        :disabled="disabled"
      />
    </td>
    <td :class="$style.tElem">
      <vs-input
        v-model="objectData.priority"
        :disabled="disabled"
      />
    </td>
    <td :class="$style.tElem">
      <vs-radio
        :class="$style.radioElem"
        v-model="objectData.state"
        val="New"
      >
        New
      </vs-radio>
      <vs-radio
        :class="$style.radioElem"
        v-model="objectData.state"
        val="Processed"
      >
        Processed
      </vs-radio>
      <vs-radio
        :class="$style.radioElem"
        v-model="objectData.state"
        val="Done"
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
    }
  },
  props: {
    objectData: { default: {} }
    // title: { type: String, default: '' },
    // description: { type: String, default: '' },
    // deadline: { type: Number, default: 24 },
    // priority: { type: String, default: '' },
    // state: { type: String, default: 'New' }
  },
  computed: {
    disabled () {
      return this.objectData.state !== 'New'
    }
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
