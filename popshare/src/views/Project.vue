<template>
  <div class="home">
    <div id="title">
      <img :src="thisproject[4]"> {{thisproject[2]}}
    </div>
    <h3>by
    <router-link :to="{name : 'User', params: {userID:  thisproject[1]}}">{{getUserByID[1]}}</router-link>

    </h3>
    <h3><i>{{thisproject[3]}}</i></h3>
    <div class="centered">
    <span style="padding-top:5px">Quality:</span>
    <star-rating :show-rating="false"	:star-size="25" :rounded-corners="true" :padding="3"
    active-color="#660099"
    :rating="Number(thisproject[5])"
    @rating-selected ="setRatingQ"
    >
</star-rating>
</div>
<div class="centered">
<span style="padding-top:5px">Creativity:</span>
<star-rating :show-rating="false"	:star-size="25" :rounded-corners="true" :padding="3"
active-color="#660099"
:rating="Number(thisproject[6])"
@rating-selected ="setRatingC"
>
</star-rating>
</div>
<div class="centered">
<span style="padding-top:5px">Appeal:</span>
<star-rating :show-rating="false"	:star-size="25" :rounded-corners="true" :padding="3"
active-color="#660099"
:rating="Number(thisproject[7])"
@rating-selected ="setRatingA"
>
</star-rating>
</div>
      <img :src="thisproject[4]">
    <div class="projcont">
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
width:auto;
}
.centered{
  text-align:center;
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
</style>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'Project',
  components: {
    StarRating
  },
  props:{
  },
  data() {
    return {
     searchText: '',
    }
  },
  methods: {
    setRatingQ(rating){
    this.$root.$data.projects[this.id][5] = ""+rating;
    },

      setRatingA(rating){
        this.$root.$data.projects[this.id][6] = ""+rating;
      },

        setRatingC(rating){
        let prev = this.$root.$data.projects[this.id];
        prev[7] = ""+rating;

        this.set(this.$root.$data.projects,this.id,prev);
        }
  },
  computed:{
      id(){
      return this.$root.$route.params.projectID;
      },

        thisproject(){
          return this.$root.$data.projects[this.$root.$route.params.projectID-1];
        },
        getUserByID(){
          let users = this.$root.$data.users;
          return users.filter(user => user[0] === this.thisproject[1])[0];
        },
  }

}
</script>
