<template>
 <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClients from "../axiosClient";
import Meals from '../views/Meals.vue'
const ingredents = ref([]);
onMounted(() => {
  axiosClients.get("list.php?i=list").then(({ data }) => {
    ingredents.value = data.meals;
  });
});
</script>

<style></style>
