<template>
  <!--  상위 컴퍼넌트 -->
  <div id="container" class="home">
    <h3>Home</h3>
    <button @click="isHidden=!isHidden">분기처리</button>
    <span v-if="isHidden">show</span>
    <span v-else>hide</span>

    <!-- 하위 컴퍼넌트 2개 이상 전달하는 방식 -->
    <context v-bind:propsStr="message"
             v-bind:num="count">
      <!-- v-slot -->
      <template v-slot:header ></template>
      <template #main></template>
      <template #footer></template>
      <template #text></template>
    </context>
  </div>
</template>

<script>
import context from "../components/context.vue";

export default {
  name: "Home",
  components: {
    context,
  },

  data() {
    return {
      message: '안녕하세요',
      count: 3000,
      isHidden: true
    }
  },

  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('');
    },
  }

};
</script>
