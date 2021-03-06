// import Vue from 'vue'
// import Router from 'vue-router'

// This is where the routes are handles or passed through. AKA this is the router page
export default [

	{
		path: '/repositories',
		// Call the route with name repositiores
		name: '/repositories',
		// The component that will be shown
		// component: require('./../pages/repositories/repositories.vue'),
		component: () => import('./../pages/repositories/repositories.vue'),
	},

	{
		path: '/user',
		// Call the route with name user
		name: '/user',
		// The component that will be shown
		component: () => import('./../pages/user/user.vue'),
	},
		// Redirects will default go to repositories
	{
		path: '/',
		redirect: '/repositories',
		
	},

	{
		path: '/*',
		redirect: '/repositories',
		
	},

];