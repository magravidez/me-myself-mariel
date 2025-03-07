import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/components/AboutMe.vue";
import HobbiesInterests from "@/components/HobbiesInterests.vue";
import Homepage from "@/components/Homepage.vue";
import ITExperience from "@/components/ITExperience.vue";
import PictureGallery from "@/components/PictureGallery.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/about-me", component: AboutMe },
  { path: "/hobbies-interests", component: HobbiesInterests },
  { path: "/it-experience", component: ITExperience },
  { path: "/picture-gallery", component: PictureGallery }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;