<template>
  <div class="container grid grid-cols-2">
    <main>
      <h1 class="text-primary text-xl">Was darf ich für Sie tun?</h1>
      <form class="mt-5" action="POST">
        <label class="block mb-2">
          <span>Ihr Name</span>
          <input type="text" name="name" value="" class="simple-form"
        /></label>
        <label class="block mb-2">
          <span>Ihre Emailadresse</span>
          <input type="text" name="email" value="" class="simple-form" />
        </label>

        <label class="block">
          <span>Ihre Nachricht an mich...</span>
          <textarea
            name="anschreiben"
            id="anschreiben"
            rows="5"
            cols="20"
            class="simple-form"
          >
          </textarea>
        </label>

        <input
          type="submit"
          value="Absenden"
          class="nav-btn mt-3 border-gray-400"
        />
      </form>
    </main>
    <aside class="ml-12">
      <div class="card-box">
        <img
          class="mx-auto"
          id="portrait"
          src="../assets/portrait.jpg"
          alt="Jana Pakebusch"
        />
        <address class="not-italic">
          <strong>Jana Pakebusch<br />Physiotherapeutin</strong>
          <span class="block">Zum Kurstrand 3</span>
          <span class="block">24229 Surendorf</span>
          <div class="block">
            <span class="inline-block w-24">Telefon:</span>
            <a class="text-primary hover:underline" href="tel:+4915207527521"
              >01520 - 752 752 1</a
            >
          </div>
          <div class="block">
            <span class="inline-block w-24">E-Mail:</span>
            <a
              class="text-primary hover:underline"
              href="mailto:info@janapakebusch.de"
              >info@janapakebusch.de</a
            >
          </div>
        </address>
      </div>

      <h1 class="text-primary text-2xl ml-3 mb-3 mt-10">Weitere Behandlungsorte</h1>


      <section class="card-box">
        <img class="" src="../assets/praxis_hoenig.jpg" alt="Praxis Hoenig" />
        <address class="not-italic">
          <strong>Heilpraktikerin für Psychotherapie<br />Privatpraxis</strong>
          <span class="block">Burgstrasse 2</span>
          <span class="block">24103 Kiel</span>
          <div class="block">
            <span class="inline-block w-24">Telefon:</span
            ><a class="text-primary hover:underline" href="tel:+494316474208"
              >0431 - 64 74 208</a
            >
          </div>
        </address>
      </section>

      <section class="card-box">
        <a href="http://www.kg-lindemann.de/" title="Praxis Lindemann"
          ><img src="../assets/praxis_lindemann.jpg" alt="Praxis Lindemann"
        /></a>
        <strong>Praxis für Physiotherapie</strong>
        <span class="block">Skandinaviendamm 251</span>
        <span class="block">24109 Kiel</span>
        <span class="block mt-5">Rezeptabrechnung möglich</span>
      </section>

      <span class="ml-4">Termine nach Vereinbarung</span>
    </aside>
  </div>
</template>
