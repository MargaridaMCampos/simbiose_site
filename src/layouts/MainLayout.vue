<template>
  <q-layout view="hHh lpR fff">
    <q-footer style="background-color:#cccccc">
        <q-toolbar>
          <q-toolbar-title>Simbiose</q-toolbar-title>
        <q-btn unelevated size="10px" href="https://www.instagram.com/invites/contact/?i=3xpcvn7fpgl2&utm_content=pxeetrq" target="_blank" round class="q-pa-md q-ma-sm">
          <q-img src="../assets/instagram.png">
          </q-img>
        </q-btn>
        <q-btn unelevated size="10px" href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-simbiose/" target="_blank" round class="q-pa-md q-ma-sm">
          <q-img src="../assets/linkedin.png">
          </q-img>
        </q-btn>
        </q-toolbar>
        <div class="text-subtitle1 q-px-md q-pb-md">
          Associação Sem Fins Lucrativos <br/>
          Email: geral@associacaosimbiose.org <br/>
          NIPC: 516266519<br/>
          
        </div>
      </q-footer>
    <q-page-container>
    
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {

  name: "MainLayout",
  components: {
  },
  data() {
    return {
    };
  },



};
</script>
