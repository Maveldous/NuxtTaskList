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
      <vs-select
        placeholder="Select"
        v-model="objectData.priority"
        :disabled="disabled"
      >
        <vs-option label="low" value="low">
          low
        </vs-option>
        <vs-option label="medium" value="medium">
          medium
        </vs-option>
        <vs-option label="high" value=high>
          high
        </vs-option>
      </vs-select>
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
  },
  computed: {
    disabled () {
      return this.objectData.state !== 'New'
    }
  }
}
</script>

<style lang="scss" module>
.tElem{
  width: 200px;
  height: 100px;
  text-align: center;
  word-wrap: break-word;
}
.radioElem {
  margin: 20px 40px;
  justify-content: left;
}
</style>
