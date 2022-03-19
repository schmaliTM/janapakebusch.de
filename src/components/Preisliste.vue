<template>
  <main>
    <section class="card-box">
      <h1 class="text-primary text-xl mb-4">Kurzbehandlungen</h1>

      <table class="border-collapse table-auto w-full">
        <tbody>
          <tr>
            <td colspan="2">Schulter-Nackenmassage</td>
            <td>15 min</td>
            <td>€ 15,00</td>
          </tr>
          <tr>
            <td colspan="2">Schulter-Nacken- /Kopfmassage</td>
            <td>20 min</td>
            <td>€ 19,00</td>
          </tr>
          <tr>
            <td colspan="2">Massage beider Arme o. Beine</td>
            <td>20 min</td>
            <td>€ 19,00</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="card-box">
      <h1 class="text-primary text-xl mb-4">Wellnessmassagen</h1>

      <table class="border-collapse table-auto w-full">
        <tbody>
          <tr>
            <td colspan="2">Ganzkörpermassage</td>
            <td>60 min</td>
            <td>€ 45,00</td>
          </tr>
          <tr>
            <td colspan="2">Aromaöl-Rückenmassage</td>
            <td>30 min</td>
            <td>€ 25,00</td>
          </tr>
          <tr>
            <td>Entspannende Fußmassage</td>
            <td class="text-sm italic">inkl. Fußbad und Peeling</td>
            <td>25 min</td>
            <td>€ 23,00</td>
          </tr>
          <tr>
            <td>Intensive Rückenmassage</td>
            <td class="text-sm italic">Nacken – Schulter – Rücken – Gesäß</td>
            <td>45 min</td>
            <td>€ 35,00</td>
          </tr>
          <tr>
            <td>Hot-Stone-Massage</td>
            <td class="text-sm italic">inkl. Nachruhezeit</td>
            <td>90 min</td>
            <td>€ 70,00</td>
          </tr>
          <tr>
            <td>Kräuterstempel-Massage</td>
            <td class="text-sm italic">inkl. Nachruhezeit</td>
            <td>70 min</td>
            <td>€ 55,00</td>
          </tr>
          <tr>
            <td>Hot-Stone-Rückenmassage</td>
            <td class="text-sm italic">inkl. Nachruhezeit</td>
            <td>45 min</td>
            <td>€ 40,00</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="card-box">
      <h1 class="text-primary text-xl mb-4">Energetische Behandlungen</h1>

      <table class="border-collapse table-auto w-full">
        <tbody>
          <tr>
            <td>Ohrkerzenbehandlung</td>
            <td class="text-sm italic">Indianische Entspannungszeremonie</td>
            <td>30 min</td>
            <td>€ 25,00</td>
          </tr>
          <tr>
            <td colspan="2">Meridiansystem und Wirbelsäule</td>
            <td>60 min</td>
            <td>€ 45,00</td>
          </tr>
          <tr>
            <td colspan="2">Energetische Entspannungsbehandlung</td>
            <td>30 min</td>
            <td>€ 25,00</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped lang="scss">
tr:nth-child(odd) {
  background-color: hsl(0, 6%, 95%);
}
td:nth-child(1) {
    width: 345px;
}

td:nth-last-child(1) {
    width: 90px;
    text-align: right;
    padding-right: 1rem;
}

td:nth-last-child(2) {
    width: 90px;
    text-align: right;
    padding-right: 1rem;
}
</style>
