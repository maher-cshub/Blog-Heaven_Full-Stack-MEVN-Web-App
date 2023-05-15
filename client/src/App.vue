<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import appbar from "./components/AppBar.vue"
export default {
  name: 'app',
  components:{
    "AppBar":appbar
  },

  data(){
    return {
    }; 
  },

};
</script>
