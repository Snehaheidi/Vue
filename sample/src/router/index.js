import { createWebHistory, createRouter } from "vue-router";
// Import your route components
// import Home from "../components/LoginView.vue";
import transferSection from "../components/transfer/TransferView.vue"; 

const routes =  [
  {
    path: "",
    component: transferSection
  }
  // {
  //   path: "/home",
  //   component: Welcome,
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router;
