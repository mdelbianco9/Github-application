<template>
  <div>

    <!-- Tool Bar -->
    <md-toolbar class="md-medium">
      <md-button class="md-button-icon">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">GitHub</h2>

      <md-input-container style="flex: 1">
        <md-input placeholder="Search Username"></md-input>
      </md-input-container>
    </md-toolbar>

    <md-layout>
        <router-view></router-view>
    </md-layout>
   
  </div>
</template>

<script>

// Imports the router variable form bootstrap.js
import { router } from './bootstrap.js';

export default {
  name: 'Githubapplication',

  router,

  data() {

    return {
      user: null,
    };

  },

  methods: {

    fetchUser(username) {
      // This gets the JSON from github to be used in the app
      this.$http.get(`users/${username}`)
    .then((res) => {
      // res is from the axios JSON
      this.user = res.data
      })
    }

  },

  mounted() {
    this.fetchUser('mdelbianco9');
  }

  
}
</script>

<style>

</style>
