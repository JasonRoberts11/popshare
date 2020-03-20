<template>
  <div id="app">
    <div id="nav">
      <img src="/logo.png">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view/>
    <br><br><br>
    <footer>
      <a href="https://github.com/JasonRoberts11/popshare">Github</a>
    </footer>
  </div>

</template>

export default {
  name: 'App',
  methods: {

  },
  computed:{
  }
  components:{
  }
}

<style>
*{
  font-family: 'Comfortaa', cursive;
  color: #331055;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0;
}
body {
  background-color:#f5e0ff;
  padding: 0px;
  margin: 0px;
}
#nav {
display: flex;
  padding: 5px;
  background-color: #fff;
  margin:0px;
  align-items: center;
}
#nav a {
  font-weight: bold;
  color: #666066;
  margin: 3px;
  padding: 10px;
  text-decoration:none;
  border-radius:20px;
}
#nav a.router-link-exact-active {
  color: #9900ff;
}
#nav a:hover {
  color: #ffffff;
  background-color: #9900ff;
}
#nav img{
  width: 50px;
}
footer{
  position:fixed;
  bottom:0px;
  left:0px;
  width: 100%;
  margin:0px;
  background-color: White;
  text-align: center;
  height:20px;
  padding:10px;

}
</style>
