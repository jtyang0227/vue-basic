<template>
  <div>
    <input type="text"
           v-model="emitData"
           @keyup.enter="pushMessages"
    />
    <button v-on:click="pushMessages">emit</button>
    </div>
</template>

<script>
export default {
  name: "ItemList",
  data() {
    return {
      emitData: ''
    }
  },

  methods: {
    /**
     * 입력
     * return emit event name: message
     */
    pushMessages: function () {
      console.log('emit call');
      this.$emit('message', {message: this.emitData})
    }
  },
}
</script>
