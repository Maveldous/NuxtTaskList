<template>
  <thead :class="$style.tasks__header">
    <tr>
      <th>Title</th>
      <th>description</th>
      <th>DeadLine</th>
      <th>Priority</th>
      <th>State</th>
    </tr>
  </thead>
</template>

<style lang="scss" module>
th{
  width: 200px;
  height: 100px;
  overflow: auto;
}
</style>
