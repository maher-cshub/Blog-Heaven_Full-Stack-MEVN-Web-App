<template>
<div>
      <v-app-bar app color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
        <v-toolbar-title class="white--text text--accent-7 center">Blog Heaven</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item :to="`/`">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
  
            <v-list-item :to="`/Posts/create`">
              <v-list-item-icon>
                <v-icon>mdi-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Add Post</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>
  
  <script>
  export default {
    name: 'App',
    data: () => ({
      drawer: false,
      group: null,
    }),
  };
  </script>