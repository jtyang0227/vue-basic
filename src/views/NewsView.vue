<template>
  <div>
    <div v-for="list in news" :key="list.id">{{ list.title }}</div>
  </div>
</template>

<script>
import {fetchNewsList} from "../api/index";

export default {
  data() {
    return {
      news: []
    };
  },
  created() {
    fetchNewsList()
        .then(response => (this.news = response.data))
        .catch(error => console.log(error));
  }
};
</script>