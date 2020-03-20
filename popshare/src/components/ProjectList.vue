<template>
<div>
  <div v-bind:class="{ projects: wrap, projectsnw: !wrap  }">
    <div class="project" v-for="project in projects" :key="project.id">
      <div class="info">
        <h1>{{project[2]}}</h1>
          <p v-if="showname">by
          <router-link :to="{name : 'User', params: {userID:  project[1]}}">{{getUserByID(project[1])[1]}}</router-link>
          </p>
          <p>
            {{getTimeAgo(project)}}
          </p>
          <div class="centered">
<p class="smol">
          <star-rating  :read-only="true" :show-rating="false"	:star-size="30" :rounded-corners="true" :padding="5"
          active-color="#660099"
          :rating="Number(project[5])"
          :increment="0.1"
></star-rating>
          </p>
          </div>
      </div>
      <router-link :to="{name : 'Project', params: {projectID:  project[0]}}">
      <div class="image">
        <img :src="project[4]">
      </div>
      </router-link>
    </div>
  </div>
</div>
</template>


<script>
import StarRating from 'vue-star-rating'

export default {


components: {
  StarRating,

},
  name: 'ProjectList',
  props:{
    projects: Array,
    showname: {type:Boolean, default:true},
    wrap:{type:Boolean, default:true}
  },
  methods:{
    getUserByID(id){
      let users = this.$root.$data.users;
      return users.filter(user => user[0] === id)[0];
    },
    getTimeAgo(proj){
    //  let date = Date.now();
      let fd = new Date(proj[8]*1000);
      //let nd = new Date(date.valueOf()/1000 - proj[8]);
      return fd.toDateString();
    }
  }


}
</script>

<style scoped>
.projects{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.projectsnw{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.project{
  width:auto;
}
.centered {
  text-align: center;
}
.smol{
margin:10px;
padding-left:30px;
}

</style>
