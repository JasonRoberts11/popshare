<template>
  <div class="home">
    <div id="title">
      <img alt="Vue logo" src="logo.png"> Popshare
    </div>
    <p><i>"Another totally legit sharing media app for the gen AA kids..."</i></p>
    <div class="search">
      <form class="pure-form" v-on:submit.prevent>
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
    <h4 v-if='searchText.length != 0'>Showing results containing: {{searchText}}</h4>
    <h2 v-else>New Projects</h2>

    <ProjectList v-if='searchText.length != 0' :projects="projectsearch"/>
    <ProjectList v-else :projects="projects"/>

  </div>
</template>

<style scoped>
#title {
  background-color: #e0b0ef;
  display:flex;
  align-items: center;
  justify-content: center;
  padding:10px;
  font-size: 3.5em;
  color: #ffffff;
  text-shadow: 0px 4px 0px #660099, 0px 3px 4px #660099;
  font-weight: bold;
}
#title img{
  width: 80px;
  margin:20px;
}
input {
  display: table-cell;
  font-size: 20px;
  border: 3px solid #efafee;
  border-radius: 3px;
  box-shadow: none !important;
  width: 80%;
  height: 40px;
  text-align:center;
}
</style>

<script>
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'Home',
  components: {
    ProjectList,

  },
  data() {
    return {
     searchText: '',
    }
  },
  computed:{
    projects() {
    let cal = this.$root.$data.projects.concat().sort((a,b) => {
  if(a[8] > b[8]) return -1;
  if(a[8] < b[8]) return 1;
  return 0;
});
      return cal;

  },
  projectsearch() {
  let cal = this.$root.$data.projects.concat().sort((a,b) => {
if(a[8] > b[8]) return -1;
if(a[8] < b[8]) return 1;
return 0;
});
    return cal.filter(proj => {
    if(proj[2].toLowerCase().includes(this.searchText)){
      return true;
    }
    if(proj[3].toLowerCase().includes(this.searchText)){
      return true;
    }
    return false;
    });
    }
}

}
</script>
