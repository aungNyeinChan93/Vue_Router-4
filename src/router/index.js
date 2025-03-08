import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Master from "@/components/layouts/Master.vue";
import AboutView from "../views/AboutView.vue";
import Guest from "@/components/layouts/Guest.vue";
import Test from "@/components/layouts/Test.vue";
import TheExperiencesCard from "@/components/layouts/TheExperiencesCard.vue";

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
      path: "/test",
      component: Test,
      children: [
        {
          path: "/test/1",
          name: "test-1",
          component: () => import("@/views/TestView.vue"),
        },
        {
          path: "2",
          name: "test-2",
          component: "",
        },
        {
          path: "3/:name",
          name: "test-3",
          component: () => import("@/views/TestView.vue"),
          props: (route) => ({
            name: route.params.name,
            isActive: route.params.name === "active" ? true : false,
            query: route.query.q,
          }),
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
          path: "brazil",
          name: "brazil",
          component: () => import("@/views/places/BrazilView.vue"),
        },
        {
          path: "panama",
          name: "panama",
          component: () => import("@/views/places/PanamaView.vue"),
        },
        {
          path: "hawaii",
          name: "hawaii",
          component: () => import("@/views/places/HawaiiView.vue"),
        },
        {
          path: "jamaica",
          name: "jamaica",
          component: () => import("@/views/places/JamaicaView.vue"),
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
          component: () =>
            import(
              /* webpackChunkName= "penang" */ "@/views/places/PenangView.vue"
            ),
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
        {
          path: "destination/:id/:name",
          name: "destinationShow",
          component: () => import("@/views/DestinationShow.vue"),
          props: (route) => ({
            id: Number(route.params.id),
            name: route.params.name,
          }),
        },
        {
          path: "experienceShow/:id/:slug",
          name: "experienceoShow",
          component: () => import("@/views/ExperienceShowView.vue"),
          props: (route) => ({
            ...route.params,
            id: Number(route.params.id),
          }),
        },
      ],
    },
  ],
  linkActiveClass: "text-red-400",
});

export default router;
