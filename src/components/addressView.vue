<template>
  <div>
    <i>{{ brandName }}</i>
    <p>{{ brandAddress }}</p>
  </div>
</template>

<script>
export default {
  name: "addressView",
  props: {
    brandName: {
      type: String,
      default: "기본 주소"
    },
    brandAddress: {
      type: Number,
      default: 0
    }
  },

}
</script>

<style scoped>
</style>