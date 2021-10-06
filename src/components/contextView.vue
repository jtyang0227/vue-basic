<template>
  <div class="hello">
    <h1>제목 : {{ propsStr }}</h1>
    <div class="container">
      <header>
        <h1>header</h1>
        <slot name="header">
          {{ num }}
        </slot>
      </header>
      <main>
        <h1>main</h1>
        <slot name="main"></slot>
      </main>
      <footer>
        <h1>footer</h1>
        <slot name="footer"></slot>
      </footer>
      <div>
        <h1>text</h1>
        <slot name="text"></slot>
      </div>
    </div>

    <!--    <div v-for="result in results"-->
    <!--         :key="result"-->
    <!--    >{{ result }}-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "contextView",
  data() {
    return {
      msgStr: 'Hello'
    }
  },
  // props: ['프롭스 속성 명']
  props: {
    propsStr: {
      type: String,
      default: 'hi'
    },
    num: {
      type: Number,
      default: 0
    }
  },

  methods: {
    logMessage() {
      alert(this.msgStr);
    }
  },
  watch: {
    // data 연결
    // 핸들러와 초기 실행 옵션
    'msgStr': {
      handler(value) {
        // alert(value);
        console.log(value);
      },

      // 컴포넌트가 생성되자마자 즉시 실행
      immediate: true
    }
  },

  /**
   * $el 접근 불가능
   */
  // created() {
  // this.fetchData();
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #42b983;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
