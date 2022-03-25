<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavigationVue from "./components/Navigation.vue";
</script>

<template>
    <div
        class="container mx-auto max-w-[960px] min-h-[550px] sm:py-14 lg:pl-16 lg:pr-20 sm:pl-12 sm:pr-12 bg-white bg-[length:185px_301px] bg-[url('/src/assets/flower.svg')] md:bg-[top_right_10rem] bg-[top_right_1rem] bg-no-repeat sm:shadow-md sm:rounded-xl"
    >
        <NavigationVue />
        <router-view />
    </div>
    <footer class="text-center my-5 drop-shadow-white">
        © 2010 Jana Pakebusch -
        <router-link class="text-primary hover:underline" to="/Impressum">Impressum</router-link>
    </footer>
</template>
