<template>
  <div>

   <router-view></router-view>
   
  </div>
</template>

<script>

// Imports the router variable form bootstrap.js
import { router } from './bootstrap.js';

export default {
  name: 'Githubapplication',

  router,
  
}
</script>

<style>

</style>
