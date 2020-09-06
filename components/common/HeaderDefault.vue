<template>
  <header :class="$style.tasks__header">
    <h2>Title</h2>
    <h2>description</h2>
    <h2>DeadLine</h2>
    <h2>Priority</h2>
  </header>
</template>

<style lang="scss" module>
.tasks__header {
  width: 55%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ddd;
}
</style>
