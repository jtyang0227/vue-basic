<template>
  <div>
    <h5>
      컴퍼넌트 간의 통신
      {{ propsdata }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "bannerView",
  // 3
  // Root(인스터스)에서 값을 내려받기 위하여 props를 선언한다.
  props: {
    propsdata: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>

</style>