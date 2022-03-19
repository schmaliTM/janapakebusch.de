<template>
<header class="flex flex-row justify-between mb-10">
        <img
          class="w-48"
          src="../assets/logo.png"
          alt="Jana Pakebusch Physiotherapeutin"
        />
      <nav class="flex flex-row text-primary h-fit mt-24">
        <router-link to="/" class="nav-btn">Startseite</router-link>
        <router-link to="/Behandlungen" class="nav-btn">Behandlungen</router-link>
        <router-link to="/Preisliste" class="nav-btn">Preisliste</router-link>
        <router-link to="/Kontakt" class="nav-btn mr-0">Kontakt</router-link>
      </nav>
</header>

</template>

<style lang="scss" scoped>
.router-link-active {
  background-image: linear-gradient(hsl(0, 0%, 100%), hsl(36.4, 100%, 89%)) !important;
  &:hover {
    box-shadow: none !important;
    text-decoration: none !important;
  }
}
</style>
