import Vue from 'vue';

// Imports app.vue to be used
import App from './App.vue';

// Imports the bootstrap.js file
import './bootstrap.js';


// binds a Vue instance to our HTML...this is how we export EVERYTHING to out index
new Vue(App).$mount('#app');