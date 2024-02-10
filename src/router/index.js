import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsList from "../views/MealsList.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import MealsByIngredents from "../views/MealsByIngredents.vue";
import mealDetils from "../views/mealDetils.vue";
import Ingredents from "../views/Ingredents.vue";
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/by-name/:name?", name: "byName", component: MealsList },
  { path: "/by-Letter/:Letter?", name: "byLetter", component: SearchByLetter },
  {
    path: "/by-Ingredents/:ingredents",
    name: "byIngredents",
    component: MealsByIngredents,
  },
  {
    path: "/ingredents",
    name: "ingredents",
    component: Ingredents,
  },
  { path: "/meal/:id", name: "mealDetils", component: mealDetils },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
