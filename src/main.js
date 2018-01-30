import Vue from 'vue';

// Imports app.vue to be used
import App from './App.vue';

// Imports the bootstrap.js file
import './bootstrap.js';


// binds a Vue instance to our HTML
new Vue(App).$mount('#app');