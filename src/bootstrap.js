import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV != 'production';

import Axios from 'axios';


Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

Vue.prototype.$http = Axios;
Object.defineProperty(Vue.prototype, '$http', {

	get() {
		return Axios;
	}

});

// Imports Vue router
import VueRouter from 'vue-router';

// Imports the index.js routes array
import routes from './routes';

// Tells vue to use the router
Vue.use(VueRouter);

// assigns vue router to an object. its a variable that will be exported to othr parts of our application
export const router = new VueRouter({
	routes,
});

import './assets/sass/app.scss';

// Export the router variable to use it in different parts of out application
export default {
	router,
};


import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

// Vue.material.registerTheme('default', {
// 	primary: 'deeppink',
// 	accent: 'blue',
// });







