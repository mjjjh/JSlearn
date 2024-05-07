<template>
  <div v-for="item in messageList" :key="item.key">
      <p>{{item._Username }} : {{ item._date }} </p>
      <p>{{ item._message }}</p>
  </div>
</template>

<script setup>
defineProps(["messageList"]);



</script>
<style lang="scss" scoped>

</style>