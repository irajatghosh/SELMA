import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/main",
    name: "MainPage",
    // route level code-splitting
    // this generates a separate chunk (Admin.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/MainPage.vue"),
  },
  {
    path: "/addaccounts",
    name: "AddAccounts",
    // route level code-splitting
    // this generates a separate chunk (AddAccounts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/AddAccounts.vue"),
  },
  {
    path: "/exams",
    name: "Exams",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Exams.vue"),
  },
  {
    path: "/registeredexams",
    name: "RegisteredExams",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/RegisteredExams.vue"),
  },
  {
    path: "/assigned",
    name: "AssignedExams",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/AssignedExams.vue"),
  },
  {
    path: "/grade",
    name: "Grade",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Grading.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
