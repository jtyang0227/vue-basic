<template>
  <!--  상위 컴퍼넌트 -->
  <div id="container" class="home">
    <h3>Home</h3>
    <button @click="isHidden =! isHidden">click</button>
    <span v-if="isHidden">show</span>
    <span v-else>hide</span>
    <hr>
    <!-- 하위 컴퍼넌트 2개 이상 전달하는 방식 -->
    <context-view :propsStr="message"
                  :num="count">
      <template v-slot:header></template>
      <template #main></template>
      <template #footer></template>
      <template #text></template>
    </context-view>
    <hr>
    <!-- 2 -->
    <!-- <컴포넌트명 v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></컴포넌트명> -->
    <banner-view :propsdata="numAdd"/>

    <!--  1  -->
    <!-- v-on:하위 컴포넌트의 이벤트 이름 = "상위 컴포넌트의 이벤트 이름" -->
    <banner-text-view @emitPass="deliverNum"/>
    <hr>
    <addressView v-for="info in addressInfo"
                 v-bind:key="info.id"
                 :brandName="info.brandName"
                 :brandAddress="info.brandAddress">
    </addressView>
  </div>
</template>

<script>
import contextView from "../components/contextView.vue";
import addressView from "../components/addressView";
import bannerView from "../components/bannerView";
import bannerTextView from "../components/bannerTextView";

export default {
  name: "Home",
  components: {
    bannerView,
    bannerTextView,
    contextView,
    addressView
  },

  data() {
    return {
      message: '안녕하세요',
      count: 3000,
      isHidden: true,
      isBorderChange: true,
      addressInfo: [
        {id: 1, brandName: '원피스', brandAddress: 100},
        {id: 3, brandName: '드래곤볼', brandAddress: 500}
      ],
      numAdd: 0,
    }
  },

  methods: {
    deliverNum(value) {
      console.log('components 2 => ' + value)
      // pass에서 받은 값(10)을 인자 value로 받을 수 있다.
      // 인스턴스의 num 값을 value(10)로 바꾼다.
      this.numAdd = value;
    }
  },

  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('');
    },
  }

};
</script>