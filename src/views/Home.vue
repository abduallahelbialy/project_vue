<template>
  <div class="flex flex-col p-8">
  
     </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex"; // Assuming you are using Vuex for store management
import axiosClients from "../axiosClient";

const store = useStore(); // Assuming you are using Vuex for store management

const meals = computed(() => store.state.meals);
const ingredients = ref([]);
onMounted(async () => {
  const response = await axiosClients.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>

<style></style>
