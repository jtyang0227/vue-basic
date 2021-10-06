<template>
  <div id="app">
    <header id="nav">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/jobs">Jobs</router-link> |
        <router-link to="/news">news</router-link>
        <hr>
      </nav>
    </header>
    <!--      <b>1. 데이터 바인딩 : {{ 바인딩데이터 }}</b>-->

    <main id="content">
      <router-view />
    </main>

    <footer id="footer" />
  </div>
</template>

<script>
export default {
  props: {
    바인딩데이터: {
      type: Number,
      default: 100
    },
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
