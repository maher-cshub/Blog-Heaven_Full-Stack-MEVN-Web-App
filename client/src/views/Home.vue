<template>
<div class="Home">
      <v-container>
        <v-alert border="left" close-text="Close Alert" color="green accent-3" dark
        dismissable v-if="this.$route.params.message">
          {{this.$route.params.message}}
        </v-alert>
        <v-row no-gutters>
          <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
            <v-card class="pa-2 elevate-on-hover" :to="{name: 'seepost', params: {post_id: post._id}}">
              <v-img height="300" width="400" cover :src="`${post.image}`"></v-img>
              <v-btn class="pa-ml-4 mt-3" small outlined color="deep-purple">
                   {{post.category}}
              </v-btn>
              <v-card-title class="headline">
                {{post.title}}
              </v-card-title>
              <v-card-text class="py-0">
                {{post.content.substring(0, 50)+ "..."}}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</div>
</template>

<script>
import API from "../api";

export default {

  name: "Home",
  data() {
    return {
    
    }
  },
  methods:{
    async getAllPosts(){    
      try {
        const posts = await API.allPosts();
        this.$store.dispatch("getPosts",posts);
      } catch (error) {
        
      }
    }
  },
  computed:{
    posts(){
      return this.$store.getters.posts
    }
  },
  async created(){
      this.getAllPosts()
      setInterval(()=>{
        console.log("ff")
        this.getAllPosts()
      },60000);
  },

};
</script>
