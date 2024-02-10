
<template>
  <div class=" bg-gray-100 h-full nav ">
   <Navbar/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
@media (max-width:477px) {
  .nav{
    font-size: 10px;
  }
}
</style>
