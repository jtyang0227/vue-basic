<template>
  <div class="about">
    <h3>about</h3>
    <ItemList @message="addMessages"></ItemList>
    <br>
    <b>3. emit</b>
    <ul style="background-color: antiquewhite">
      <li v-for="msg in msgData" :key="msg">{{ msg }}</li>
    </ul>
  </div>
</template>

<script>
import ItemList from '../components/ItemList';

export default {
  components: {
    ItemList
  },
  data() {
    return {
      msgData: []
    }
  },
  methods: {
    /**
     *
     * @param payload
     */
    addMessages(payload) {
      console.log('emit callback');
      this.msgData.push(payload.message);
    }
  },
}
</script>