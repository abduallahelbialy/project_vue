<template>
  <div class="flex justify-center gap-2 mt-2 flex-wrap">
    <router-link
      :to="{ name: 'byLetter', params: { Letter } }"
      v-for="Letter of Letters"
      :key="Letter"
    >
      {{ Letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex"; // Import the useStore function
import Mealitem from "../components/Mealitem.vue";
const route = useRoute();
const store = useStore(); // Use the useStore function to get access to the store
const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.MealsByLetter);
watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.Letter);
});
onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.Letter); // Corrected action name
});
</script>

<style></style>
