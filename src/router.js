import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";



Vue.use (Router);


export default new Router ({
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component : () => import (/* webpackChunkName : "login"*/"./views/Login")

        },
        {
            path: "/signup",
            name: "signup",
            component: () => import (/* webpackChunkName : "signup"*/"./views/Signup")
        },
        {
            path: "/profile",
            name: "profile",
            component : () => import (/* webpackChunkName : "profile"*/"./views/Profile")
        }
        
       
    ]
})