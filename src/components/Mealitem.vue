<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetils', params: { id: meal.idMeal }  } ">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate rem
        possimus eos adipisci voluptates culpa ipsa corrupti, blanditiis, nisi
        in aut sapiente voluptas.
      </p>
      <div class="flex justify-between items-center">
        <YoutTupButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>
  

<script setup>
import YoutTupButton from './YoutTupButton.vue';

const {meal}=defineProps({
    meal:{
        required: true,
        type:Object
    }
})
</script>
