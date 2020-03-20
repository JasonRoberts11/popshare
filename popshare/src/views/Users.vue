<template>
  <div class="home">
    <div id="title">
      Users
    </div>
    <div class="thirds">
      <div class="third">
        <h1>By Name</h1>
        <UserList :users="usersby"/>
      </div>
      <div class="third">
        <h1>By Rank</h1>
        <UserList :users="usersrank"/>
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
width:50%;
}

.thirds{
  display:flex;
  justify-content: space-around;

}
</style>

<script>
import UserList from '@/components/UserList.vue'

export default {
  name: 'Users',
  components: {
    UserList
  },
  props:{
  },
  computed:{
    usersby() {
      return this.$root.$data.users.concat().sort((a,b) => {
    if(a[1] > b[1]) return 1;
    if(a[1] < b[1]) return -1;
    return 0;
  });
      },
      usersrank() {
        return this.$root.$data.users.concat().sort((a,b) => {
      if(Number(a[6]) > Number(b[6])) return -1;
      if(Number(a[6]) < Number(b[6])) return 1;
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
