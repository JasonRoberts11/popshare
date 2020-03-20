<template>
  <div class="home">
    <div id="title">
      <img :src="thisuser[3]"> {{thisuser[1]}}
    </div>
    <h2><i>"{{thisuser[5]}}"</i></h2>
    <h3>User Rank: {{thisuser[6]}} Points: {{thisuser[7]}}</h3>
    <h4>Recent Projects By {{thisuser[1]}}:</h4>
    <div class="projcont">
    <ProjectList :projects="projectsby" :showname="false" :wrap="false"/>
    </div>

    <h4>Best Projects By {{thisuser[1]}}:</h4>
    <div class="projcont">
    <ProjectList :projects="projectsbest" :showname="false" :wrap="false"/>
    </div>
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
.projcont{
width:100%;
overflow: auto;

}
</style>

<script>
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'User',
  components: {
    ProjectList
  },
  props:{
  },
  computed:{
    projectsby() {
      return this.$root.$data.projects.filter(proj => proj[1] === this.id).concat().sort((a,b) => {
    if(a[8] > b[8]) return -1;
    if(a[8] < b[8]) return 1;
    return 0;
  });
      },
      projectsbest() {
        return this.$root.$data.projects.filter(proj => proj[1] === this.id).concat().sort((a,b) => {
      if(a[5] > b[5]) return -1;
      if(a[5] < b[5]) return 1;
      return 0;
    });
        },
      id(){
        return this.$root.$route.params.userID;
      },

        thisuser(){
          let users = this.$root.$data.users;
          return users.filter(user => user[0] === this.$root.$route.params.userID)[0];
        }
  }

}
</script>
