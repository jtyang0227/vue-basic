import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = import("../views/Home.vue");
const About = import("../views/About.vue");
const Login = import("../views/Login.vue");
const JobsView = import("../views/JobsView.vue");
const NewsView = import("../views/NewsView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => Login,
  },
  {
    path: "/about",
    name: "About",
    component: () => About,
  },
  {
    path: '/jobs',
    component: () => JobsView,
  },
  {
    path: "/news",
    component: () => NewsView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
