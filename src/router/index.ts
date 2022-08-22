import { createRouter, createWebHistory } from "vue-router";
import BasicHue from "@/views/BasicHue.vue";
import PaletteKnives from "@/views/PaletteKnives.vue";
import FinalPalette from "@/views/FinalPalette.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "basicHue",
      component: BasicHue,
    },
    {
      path: "/palette",
      name: "palette",
      component: PaletteKnives,
    },
    {
      path: "/finalpalette",
      name: "finalpalette",
      component: FinalPalette,
    },
  ],
});

export default router;
