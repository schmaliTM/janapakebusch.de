<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavigationVue from "./components/Navigation.vue";
</script>

<template>
  <div
    class="container mx-auto w-[960px] min-h-[550px] py-14 pl-16 pr-20 bg-white bg-[url('/src/assets/flower_headover.gif')] bg-right-top bg-no-repeat shadow-md rounded-xl"
  >
    <NavigationVue />
    <router-view />
  </div>
  <footer class="text-center my-5 drop-shadow-white">
    © 2010 Jana Pakebusch -
    <router-link class="text-primary hover:underline" to="/Impressum">Impressum</router-link>
  </footer>
</template>
