<template>
  <div class="home">
    <div id="title">
      Projects
    </div>
    <div class="thirds">
      <div class="third">
        <h1>By Name</h1>
        <ProjectList :projects="projectsbyName"/>
      </div>
      <div class="third">
        <h1>By Quality</h1>
        <ProjectList :projects="projectsbyQual"/>
      </div>
      <div class="third">
        <h1>By Creativity</h1>
        <ProjectList :projects="projectsbyCreativity"/>
      </div>

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
.third{
width:30%;
}

.thirds{
  display:flex;
  justify-content: space-around;

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
    projectsbyName() {
      return this.$root.$data.projects.concat().sort((a,b) => {
    if(a[2] > b[2]) return 1;
    if(a[2] < b[2]) return -1;
    return 0;
  }).slice(0,20);
      },
      projectsbyQual() {
        return this.$root.$data.projects.concat().sort((a,b) => {
      if(a[5] > b[5]) return -1;
      if(a[5] < b[5]) return 1;
      return 0;
    }).slice(0,20);
        },

        projectsbyCreativity() {
          return this.$root.$data.projects.concat().sort((a,b) => {
        if(a[6] > b[6]) return -1;
        if(a[6] < b[6]) return 1;
        return 0;
      }).slice(0,20);
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
