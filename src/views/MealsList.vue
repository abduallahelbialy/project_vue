<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full mb-3"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals"/>
  
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from '../views/Meals.vue'
const route=useRoute()
const keyword = ref("");
const meals = computed(() => store.state.searchMeals);
function searchMeals() {
   if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>

<style></style>
