<template>
  <div>
    <div v-for="(list, index) in jobs" :key="index">
      <ul>
        <li>
          user :
          <a v-bind:href="list.url">
            <span>{{ list.user }}</span>
          </a>
          <i>
            <window-popup v-model="open">팝업창의 내용입니다.</window-popup>
            <button @click="open = true">{{ open }}</button>
          </i>
          <div><b>title : </b>{{ list.title }}</div>
        </li>
      </ul>
      {{ list }}
    </div>
    <h1>UserInfo</h1>
  </div>
</template>

<script>
import {fetchNewsList} from "../api";
import WindowPopup from "../components/windowPopup";

export default {
  name: "JobsView",
  components: {
    WindowPopup
  },
  data() {
    return {
      jobs: [],
      open: false,
    };
  },
  created() {
    fetchNewsList()
        .then(response => (this.jobs = response.data))
        .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>