import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/components/AboutMe.vue";
import HobbiesInterests from "@/components/HobbiesInterests.vue";
import Homepage from "@/components/Homepage.vue";
import ITExperience from "@/components/ITExperience.vue";
import PictureGallery from "@/components/PictureGallery.vue";

const routes = [
  { path: "/", redirect: "/index" }, 
  { path: "/index", component: Homepage },
  { path: "/about-me", component: AboutMe },
  { path: "/hobbies-interests", component: HobbiesInterests },
  { path: "/it-experience", component: ITExperience },
  { path: "/picture-gallery", component: PictureGallery },
  { path: "/:pathMatch(.*)*", redirect: "/index" } // 🔥 Handles 404 by redirecting to the homepage
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
