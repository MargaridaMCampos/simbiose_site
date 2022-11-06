<template>
  <q-page class="col q-mr-md">
    <div class="row col-12" style="justify-content: space-between; min-height: 50vh;">
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">

        <h3>Quem somos</h3>
        <span> ldsflkdsajflk; jdsaf dsfnldskaflkdsn fkdsfh ;jdsf
          dsfdsalkfjdsalkjgdaanflidsagkjndsknfd dsjfjdsflj ds
          dfdskjfka jhljdsfdsa jnldijsa f
          ldsa kjfdslkfh jsa lk lkjlk jlkasdflk j
          dsanflk dslkf l ;lkdsalkvdsalknldsa k ndsakf dsalkjf lkdsj f dsfds
          dsafjhdsalkhfdh fj dsa
          dsf dskjdsflkj gfdshgfdsgidsagn s kjdsa flds dsf ;jdsgf fg jf
          lkgfdsakgia gdsa id fdsa nf jdsf kndsf usgfis ibf siud
          dsfodsa foosd lnf odsn fondsfo sdfdsa nifand nai langldsa kkds nfiku </span>

      </div>
      <div></div>
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <q-img src="../assets/illustrations/undraw_collaborators_re_hont.svg">
        </q-img>
      </div>
    </div>


    <div class="row q-pa-md"
      style="height: 20vh; min-height: 40vh; padding: 40px 20vw; justify-content: space-between;">

      <q-btn rounded outline size="15px" :color="identityType == 0 ? 'primary' : 'standard'"
        @click="() => { changeIdentity(0) }">
        <div class="row items-center no-wrap">
          <div class="text-center">
            Sou uma empresa
          </div>
        </div>
      </q-btn>

      <q-btn rounded outline size="15px" style="" :color="identityType == 1 ? 'primary' : 'standard'"
        @click="() => { changeIdentity(1) }">
        <div class="row items-center no-wrap">
          <div class="text-center">
            Sou um voluntário
          </div>
        </div>
      </q-btn>

      <q-btn rounded outline size="15px" :color="identityType == 2 ? 'primary' : 'standard'"
        @click="() => { changeIdentity(2) }">
        <div class="row items-center no-wrap">
          <div class="text-center">
            Sou uma associação
          </div>
        </div>
      </q-btn>
    </div>

    <div class="q-pa-md" style="max-width: 400px">

      <q-form id="form" @submit="onSubmit" @reset="onReset" ref="myForm" class="q-gutter-md">
        <q-input filled v-model="name" label="Nome *" hint="Nome" lazy-rules
          :rules="[val => val && val.length > 0 || 'Campo obrigatório']" />

        <q-input filled v-model="email" type="email" label="E-mail *" hint="E-mail" lazy-rules
          :rules="[val => !!val || 'Campo obrigatório', this.isValidEmail]" />

        <q-input filled type="tel" v-model="mobile" label="Número de telémovel" hint="Número de telémovel" />

        <q-input filled type="textarea" v-model="description" label="Nota" hint="Nota" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>

  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      identityType: 0,
      name: null,
      email: null,
      mobile: null,
      description: null,
    }
  },

  methods: {

    changeIdentity(identityType) {
      this.identityType = identityType
      this.$router.push({ path: '/', hash: '#form' })
    },

    isValidEmail(email) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(email) || 'Email inválido';
    },

    onSubmit() {
      const myForm = ref(null)

      myForm.value.validate().then(success => {
        if (success) {


          const test = { identityType: this.identityType, name: this.name, email: this.email, mobile: this.mobile, description: this.description };

          debugger;
          axios.get('https://httpbin.org/get')
            .then(function (response) {
              // handle success
              console.log(response);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        }
      })


    },

    onReset() {
      this.identityType = 0
      this.name = null
      this.email = null
      this.mobile = null
      this.description = null
    }
  }
}
</script>
