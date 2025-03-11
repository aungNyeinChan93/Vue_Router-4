import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Master from "@/components/layouts/Master.vue";
import AboutView from "../views/AboutView.vue";
import Guest from "@/components/layouts/Guest.vue";
import Test from "@/components/layouts/Test.vue";
import { destinations } from "@/data.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
    {
      path: "/guest",
      component: Guest,
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/views/auth/LoginView.vue"),
          meta: { guest: true },
          beforeEnter: (to, from, next) => {
            if (confirm("sure?") && to.meta.guest) {
              next();
            }
          },
        },
      ],
    },
    {
      path: "/test",
      component: Test,
      children: [
        {
          path: "1",
          name: "test-1",
          component: () => import("@/views/TestView.vue"),
        },
        {
          path: "2",
          name: "test-2",
          component: () => import("@/views/RouteQueryParamsView.vue"),
        },
        {
          path: "3/:name?",
          name: "test-3",
          component: () => import("@/views/TestView.vue"),
          props: (route) => ({
            name: route.params.name,
            isActive: route.params.name === "active" ? true : false,
            query: route.query.q,
          }),
          children: [
            {
              path: "childRoute",
              component: () => import("@/views/ChildTestView.vue"),
            },
          ],
        },
        {
          path: "4",
          name: "test-4",
          component: () => import("@/views/TestLinkView.vue"),
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
          meta: { title: "home" },
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
          props: (route) => ({
            name: "bagan",
          }),
          children: [
            {
              path: "about",
              component: () => import("@/views/about/BaganAboutView.vue"),
            },
          ],
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
          //route guard
          beforeEnter: (to, from, next) => {
            const exists = destinations.find(
              (destination) => destination.id == parseInt(to.params.id)
            );
            if (!exists) {
              next({ name: "notFound" });
            } else {
              next();
            }
          },
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
        {
          path: "protected",
          name: "protected",
          component: () => import("@/views/ProtectedView.vue"),
          meta: { requiredsAuth: true },
        },
        {
          path: "invoices",
          name: "invoices",
          component: () => import("@/views/InvoicesView.vue"),
          meta: { requiredsAuth: true },
        },
      ],
    },
  ],

  linkActiveClass: "text-red-400",

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Global route guard
router.beforeEach((to, from) => {
  console.log(`this route from ${from.path} to ${to.path}`);

  if (to.meta.title) {
    document.title = to.meta.title.toUpperCase();
  } else {
    document.title = "Travel-App";
  }

  if (to.meta.requiredsAuth && !window.username) {
    return { name: "login", query: { redirect: to.fullPath } };
  }

  return true;
});

export default router;
