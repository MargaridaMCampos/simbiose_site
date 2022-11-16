<template>
  <q-page style="background-color: white;">
    <q-banner inline-actions style="background-color: white;">
      <div class = "text-h2 q-pa-lg" style = "color:#0B5351;">
        <q-img src= "../assets/simbiose_logo_color.png" style="width: 1em;"/>
      Simbiose
      </div>
    </q-banner>
    <div class="row q-pa-lg justify-around">
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <div class = "text-h4 q-pa-md" style="color:gray"> 
          a construir uma comunidade digital de entreajuda em Portugal.
        </div>
        <div class="text-h5 q-pa-md" style="color:gray">
          &#183;  centralizar iniciativas<br/> 
          &#183;  dar visibilidade às associações<br/>
          &#183;  alargar espectro de apoios<br/>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-md">
          <q-img src="../assets/doodles.gif">
          </q-img>
      </div>
    </div>

    <div class="q-pa-xl q-gutter-xl q-ma-lg fit row  justify-center">
      <q-btn @click="goto('association')" size="lg" label="Associações" no-caps rounded style="background-color:#0B5351; color: white;"></q-btn>
      <q-btn @click="goto('individual')" size="lg" label="Indivíduos" no-caps rounded style="background-color:#0B5351; color: white;"></q-btn>
      <q-btn @click="goto('company')" size="lg" label="Empresas" no-caps rounded style="background-color:#0B5351; color: white;"></q-btn>
    </div>

    <div class = "row q-pa-lg justify-between" ref="association" style="background-color:#F8F8F8;">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-md q-mx-xl">
        <q-img src="../assets/illustrations/team.svg"></q-img>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-md q-mx-xl">
        <q-card>
          <q-card-section>
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus mollis dui, ac euismod urna dapibus sed. Maecenas non tempor dui, quis auctor mauris. In quis sem in elit accumsan malesuada. Pellentesque dignissim tellus odio, nec commodo ligula pulvinar non. Donec sollicitudin orci in odio tristique, vitae rutrum est faucibus. Phasellus dignissim id odio nec rhoncus. Phasellus consequat arcu quis erat accumsan ultricies. Sed nec consequat mauris. Curabitur eu venenatis velit. Nullam nec pellentesque magna. Sed eget sagittis lorem, non pharetra eros. Integer ornare felis id faucibus venenatis.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class = "row q-pa-lg justify-between" ref="individual">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-md q-mx-xl">
        <q-img src="../assets/illustrations/undraw_collaborators_re_hont.svg"></q-img>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-md">
        <q-card>
          <q-card-section>
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus mollis dui, ac euismod urna dapibus sed. Maecenas non tempor dui, quis auctor mauris. In quis sem in elit accumsan malesuada. Pellentesque dignissim tellus odio, nec commodo ligula pulvinar non. Donec sollicitudin orci in odio tristique, vitae rutrum est faucibus. Phasellus dignissim id odio nec rhoncus. Phasellus consequat arcu quis erat accumsan ultricies. Sed nec consequat mauris. Curabitur eu venenatis velit. Nullam nec pellentesque magna. Sed eget sagittis lorem, non pharetra eros. Integer ornare felis id faucibus venenatis.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class = "row q-pa-lg justify-between" ref="company" style="background-color:#F8F8F8;">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-md q-mx-xl">
        <q-img src="../assets/illustrations/team.svg"></q-img>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-md q-mx-xl">
        <q-card>
          <q-card-section>
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus mollis dui, ac euismod urna dapibus sed. Maecenas non tempor dui, quis auctor mauris. In quis sem in elit accumsan malesuada. Pellentesque dignissim tellus odio, nec commodo ligula pulvinar non. Donec sollicitudin orci in odio tristique, vitae rutrum est faucibus. Phasellus dignissim id odio nec rhoncus. Phasellus consequat arcu quis erat accumsan ultricies. Sed nec consequat mauris. Curabitur eu venenatis velit. Nullam nec pellentesque magna. Sed eget sagittis lorem, non pharetra eros. Integer ornare felis id faucibus venenatis.
            </div>
          </q-card-section>
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
            <q-btn @click. label="Submit" type="submit"  style="background-color:#0B5351; color: white;" />
            <q-btn label="Reset" type="reset"  style="color:#0B5351" flat class="q-ml-sm" />
          </div>
        </q-form>

      </q-card>
    </div>
  </q-dialog>
  <q-dialog auto-close v-model="thankYou"> 
    <q-card class="q-pa-xl">
      <q-card-section>
        <q-img src="../assets/illustrations/thanks.svg">
        </q-img>
      </q-card-section>
      <q-card-section>
        <div class="text-h3" style="color:gray">
          Obrigado!
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>

<!--   <div class="row q-mx-lg">
      <div v-for="card in infoCards" :key="card.id" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-md">
        <info-card
          v-bind:id="card.id"
          v-bind:title-name="card.titleName"
          v-bind:bullets="card.bullets"
          v-bind:button-text="card.buttonText"
          @selected="(i)=> changeIdentity(i)">
        </info-card>
      </div>
  </div> -->
    </q-page>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
import {ref} from '@vue/composition-api'
/* import InfoCard from "../components/InfoCard.vue"
 */

export default {


  data() {
    return {
      identityType: null,
      name: null,
      email: null,
      mobile: null,
      description: null,
      popForm:false,
      thankYou:false,
      infoCards: [{id:0,
                    titleName:'Sou uma Associação',
                    bullets: [{id:0, text: 'Ah e tal'},
                              {id:1, text: 'e mais e mais'},
                              {id:2, text: 'e tal e coiso'}],
                    buttonText:'Juntar!'
                    },
                   {id:1,
                    titleName:'Sou uma Empresa',
                    bullets: [{id:0, text: 'Ah e tal'},
                              {id:1, text: 'e mais e mais'},
                              {id:2, text: 'e tal e coiso'}],
                    buttonText:'Apoiar!'},
                   {id:2,
                    titleName:'Sou um Indivíduo',
                    bullets: [{id:0, text: 'Ah e tal'},
                              {id:1, text: 'e mais e mais'},
                              {id:2, text: 'e tal e coiso'}],
                    buttonText:'Aliar!'}]
    }
  },

  methods: {

    goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        window.scrollTo(0, top);
    },

    changeIdentity(identityType) {
      this.identityType = identityType
      this.popForm=true
      
    },

    isValidEmail(email) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(email) || 'Email inválido';
    },

    onSubmit() {

      /* axios.post('https://yuzmuq9mdf.execute-api.us-east-2.amazonaws.com/live/lead',
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
           }}) */
      this.popForm=false
      this.onReset()
      this.thankYou=true
      

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
