<template>
  <div>
    <button @click="passNum">pass</button>
  </div>
</template>

<script>
export default {
  name: "bannerTextView",
  methods: {
    passNum: function () {
      console.log('components 1 =>  bannerTextView');
      // $emit을 이용하여 Root(인스턴스)로 값을 보낸다.
      this.$emit('emitPass', 10);
    }
  },
}
</script>

<style scoped>

</style>