<template>
  <div>
    <input type="text"
           v-model="emitData"
           @keyup.enter="pushMessages"
           ref="pushMessages"
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
     * About
     * return emit event name: message
     */
    pushMessages: function () {
      if (undefined === this.emitData || null === this.emitData || "" === this.emitData) {
        alert('값을 입력해주세요.');
        return false;
      }

      this.$emit('message', {message: this.emitData});
      this.$refs.pushMessages.value = null;
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return false;
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
