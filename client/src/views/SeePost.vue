<template>
  <div class="SeePost">
    <v-container>
      <v-row no-gutters>
        <v-col sm="10" class="pa-4 mx-auto">
          <v-card class="pa-2">
            <v-img height="600" width="auto"  :src="`/${post.image}`"></v-img>
            <v-card-actions class="pb-0">
              <v-row class="mt-1 mx-1">
                <v-col sm="2">
                  <v-btn small outlined color="primary">
                    {{post.category}}
                  </v-btn>
                </v-col>
                <v-col sm="10" class="d-flex justify-end">
                  <v-btn color="blue" text v-on:click="EditPost">Edit</v-btn>
                  <v-btn color="red" v-on:click="DeletePost" text>Delete</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-subtitle class="headline">
              <h3>{{post.title}}</h3>
            </v-card-subtitle>
            <v-card-text class="grey--text">
              <v-row class="pb-3">
                <h5 class="black--text">
                  CREATED : 
                  <span class="green--text">
                    {{post.date_created.split("T")[0]}}
                  </span>  
                </h5>
                &nbsp;&nbsp;&nbsp;
                <h5 class="black--text">
                  LAST UPDATE : 
                  <span class="blue--text">
                    {{post.date_updated.split("T")[0]}}
                  </span>
                </h5>
              </v-row>
              <p>
                {{post.content}}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>
import API from "../api"
export default {

  //DATA
  data(){
    return {
      post: {},
    };
  },
  methods: {
        async DeletePost(){
            const data = await API.deletePost(this.post._id)
            console.log(data)
            this.$router.push({name: "Home", params: {message: "POST DELETED SUCCESSFULY"}})
        },
        async EditPost(){
          this.$router.push({name:"updatepost",params:{id:this.post._id}})
        }
    },

  //lyfecyce Hooks
  async created()
  {
    this.post = await API.seePost(this.$route.params.post_id);
  }
}
</script>