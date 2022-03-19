import { createRouter, createWebHistory } from "vue-router";
import StartseiteVue from "../components/Startseite.vue";
import BehandlungenVue from "../components/Behandlungen.vue";
import PreislisteVue from "../components/Preisliste.vue";
import KontaktVue from "../components/Kontakt.vue";
import ImpressumVue from "../components/Impressum.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: StartseiteVue,
    },
    {
      path: "/Behandlungen",
      component: BehandlungenVue,
    },
    {
      path: "/Preisliste",
      component: PreislisteVue,
    },
    {
      path: "/Kontakt",
      component: KontaktVue,
    },
    {
      path: "/Impressum",
      component: ImpressumVue,
    },
  ],
});

export default router;
