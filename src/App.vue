<template>
  <div>
    <pre> {{ user }}</pre>

   <router-view></router-view>
   
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
