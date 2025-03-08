import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Master from "@/components/layouts/Master.vue";
import AboutView from "../views/AboutView.vue";
import Guest from "@/components/layouts/Guest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/guest",
      component: Guest,
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/views/auth/LoginView.vue"),
        },
      ],
    },
    {
      path: "/",
      component: Master,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "about",
          name: "about",
          component: AboutView,
        },
        {
          path: "bagan",
          name: "bagan",
          component: () => import("@/views/places/BaganView.vue"),
        },
        {
          path: "bankok",
          name: "bankok",
          component: () => import("@/views/places/BankokView.vue"),
        },
        {
          path: "hanoi",
          name: "hanoi",
          component: () => import("@/views/places/HanoiView.vue"),
        },
        {
          path: "java",
          name: "java",
          component: () => import("@/views/places/JavaView.vue"),
        },
        {
          path: "luangPrabang",
          name: "luangPrabang",
          component: () => import("@/views/places/LuangPrabangVIew.vue"),
        },
        {
          path: "penang",
          name: "penang",
          component: () => import("@/views/places/PenangView.vue"),
        },
        {
          path: "siargao",
          name: "siargao",
          component: () => import("@/views/places/SiargaoView.vue"),
        },
        {
          path: "siemreap",
          name: "siemreap",
          component: () => import("@/views/places/SiemReapView.vue"),
        },
      ],
    },
  ],
});

export default router;
