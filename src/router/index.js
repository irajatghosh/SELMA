import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// function guardMyRoute(to, from, next) {
//   if (store.getters.getToken) {
//     console.log("true");
//     next();
//   } else {
//     next("/login");
//   }
// }

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
    meta: { requiresUnauth: true },
  },
  {
    path: "/main",
    name: "MainPage",
    // route level code-splitting
    // this generates a separate chunk (Admin.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/MainPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/addaccounts",
    name: "AddAccounts",
    // route level code-splitting
    // this generates a separate chunk (AddAccounts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/AddAccounts.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/exams",
    name: "Exams",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Exams.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/registeredexams",
    name: "RegisteredExams",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/RegisteredExams.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/assigned",
    name: "AssignedExams",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/AssignedExams.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/grade",
    name: "Grade",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Grading.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/results",
    name: "Results",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Results.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Contact.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/page-under-construction",
    name: "Construction",
    // route level code-splitting
    // this generates a separate chunk (ExamLists.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Admin" */ "../views/PageUnderConstruction.vue"
      ),
    meta: { requiresAuth: true },
  },
  {
    path: "/:notFound(.*)",
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.getToken) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters.getToken) {
    next("/main");
  } else {
    next();
  }
});

export default router;
