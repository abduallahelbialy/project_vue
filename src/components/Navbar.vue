<template>
     <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5  ">Home</router-link>
      <div class="felx items-center gap-1 ">
         <router-link :to="{name:'byName'}" class="inline-flex items-center px-2 h-full  transition-colors  hover:bg-purple-100">Search Meals</router-link>
         <router-link :to="{name:'byLetter'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">Search By Letter Meal</router-link>
         <router-link :to="{name:'ingredents'}" class=" inline-flex items-center px-2 h-full  transition-colors hover:bg-purple-100"> Meals By Ingredents</router-link>
      </div>
    </header>
</template>