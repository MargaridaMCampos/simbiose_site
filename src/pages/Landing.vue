<template>
  <q-page>
    <q-banner style="background-color: #0B5351;">
      <div class = "text-h2 col q-pa-lg text-center items-center" style = "color:white; font-family:  ;">
        <q-img src= "../assets/simbiose_logo_white.png" style="width: 1em;"/>
      Simbiose
    </div>
    <template v-slot:action>
      <q-btn href="https://www.instagram.com/invites/contact/?i=3xpcvn7fpgl2&utm_content=pxeetrq" target="_blank" round class="q-pa-md q-ma-sm">
        <q-img src="../assets/instagram.png">
        </q-img>
      </q-btn>
      <q-btn href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-simbiose/" target="_blank" round class="q-pa-md q-ma-sm">
        <q-img src="../assets/linkedin.png">
        </q-img>
      </q-btn>
    </template>
      </q-banner>
    <div class="row q-pa-lg">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <div class = "text-h6 q-pa-md" style="color:#0B5351"> ldsflkdsajflk; jdsaf dsfnldskaflkdsn fkdsfh ;jdsf
          dsfdsalkfjdsalkjgdaanflidsagkjndsknfd dsjfjdsflj ds
          dfdskjfka jhljdsfdsa jnldijsa f
          ldsa kjfdslkfh jsa lk lkjlk jlkasdflk j
          dsanflk dslkf l ;lkdsalkvdsalknldsa k ndsakf dsalkjf lkdsj f dsfds
          dsafjhdsalkhfdh fj dsa
          dsf dskjdsflkj gfdshgfdsgidsagn s kjdsa flds dsf ;jdsgf fg jf
          lkgfdsakgia gdsa id fdsa nf jdsf kndsf usgfis ibf siud
          dsfodsa foosd lnf odsn fondsfo sdfdsa nifand nai langldsa kkds nfiku 
        </div>

      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-md">
        <q-img src="../assets/illustrations/undraw_collaborators_re_hont.svg">
        </q-img>
      </div>
    </div>


    <div class="row q-mx-lg">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-md">
        <q-card>
          <q-card-section class="bg text-white" style="background-color:#0B5351">
            <div class="text-h6 text-center">
              Empresas
            </div>
          </q-card-section>
          <q-card-section class="q-pa-lg">
            <div class="text-subtitle1 text-center">
              Text
            </div>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn rounded outline :color="identityType == 0 ? 'primary' : 'standard'"
              @click="() => { changeIdentity(0) }">
                  Sou uma empresa
            </q-btn>
          </q-card-actions>
        </q-card> 
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-md">
        <q-card class="q-pa-md">
          <q-card-actions align="center">
            <q-btn rounded outline style="" :color="identityType == 1 ? 'primary' : 'standard'"
              @click="() => { changeIdentity(1) }">
                  Sou um voluntário
            </q-btn>
          </q-card-actions>
        </q-card> 
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-md">
        <q-card class="q-pa-md">
          <q-card-actions align="center">
            <q-btn rounded outline :color="identityType == 2 ? 'primary' : 'standard'"
              @click="() => { changeIdentity(2) }">
                  Sou uma associação
            </q-btn>
          </q-card-actions>
        </q-card> 
      </div>
    </div>
    <q-dialog v-model="popForm">
    
    <div v-if="identityType!==null" class="row justify-center">
      <q-card class="q-pa-lg">
        <q-form id="form" @submit="onSubmit" @reset="onReset" ref="myForm" class="q-gutter-md">
          <q-input filled v-model="name" label="Nome *" hint="Nome" lazy-rules
            :rules="[val => val && val.length > 0 || 'Campo obrigatório']" />

          <q-input filled v-model="email" type="email" label="E-mail *" hint="E-mail" lazy-rules
            :rules="[val => !!val || 'Campo obrigatório', this.isValidEmail]" />

          <q-input filled type="tel" v-model="mobile" label="Número de telémovel" hint="Número de telémovel" />

          <q-input filled type="textarea" v-model="description" label="Nota" hint="Nota" />

          <div>
            <q-btn @click. label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>

      </q-card>
    </div>
  </q-dialog>
  </q-page>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
import {ref} from '@vue/composition-api'

export default {
  data() {
    return {
      identityType: null,
      name: null,
      email: null,
      mobile: null,
      description: null,
      popForm:false,
    }
  },

  methods: {

    changeIdentity(identityType) {
      this.identityType = identityType
      this.popForm=true
      
    },

    isValidEmail(email) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(email) || 'Email inválido';
    },

    onSubmit() {

      axios.post('https://yuzmuq9mdf.execute-api.us-east-2.amazonaws.com/live/lead',
          {
            "name": this.name ,
            "user_type": this.identityType,
            "email": this.email,
            "phone": this.mobile,
            "text": this.description,
            "date": "2022-12-01"
            },
           {headers: {
            Authorization: "AWS4-HMAC-SHA256 Credential=AKIAUNP3GDVEU23K7757/20221106/us-east-2/execute-api/aws4_request, SignedHeaders=content-type;host;x-amz-content-sha256;x-amz-date, Signature=35798e466357cfdc06294b342498215238be5f6592a0909695dba6a1d8930545"
           }}).then((res) => {
            res;
            this.popForm=false
            this.onReset()
            $q.notify({
              message: 'Jim pinged you.',
              color: 'purple'
            })
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
