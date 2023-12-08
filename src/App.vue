<template>

  <TheHeader/>
  
  <div class="wrapper">
    <router-view/>
  </div>

  <TheFooter/>
</template>

<script>
  import TheFooter from './components/TheFooter.vue'
  import TheHeader from './components/TheHeader.vue'


  export default {
    components: {
      TheFooter,
      TheHeader
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

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&family=IBM+Plex+Sans:wght@200&family=Oswald:wght@300&display=swap');

nav {
  padding: 30px;
}

nav a {
  font-weight: bold; 
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgba(235, 220, 196, 0.801); 
  /* background-image: url("./assets/sky-blue-flag-poland.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
}

.wrapper {
  min-height: 100vh;
}



</style>

