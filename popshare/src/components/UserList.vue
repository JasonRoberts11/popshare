<template>
<div>
  <div class="projects">
    <div class="project" v-for="user in users" :key="user.id">
      <div class="info">
          <h3>
          <img :src = "user[3]"> <br>
          <router-link :to="{name : 'User', params: {userID:  user[0]}}">{{user[1]}}</router-link>
          </h3>
          <div class="centered">
          <p>
            Rank:{{user[6]}}
          </p>
          </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>

export default {


components: {

},
  name: 'UserList',
  props:{
    users: Array,
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
.info{
margin:10px;
background-color:#ffeeff;
padding:10px;
border-radius:20px;

}

</style>
