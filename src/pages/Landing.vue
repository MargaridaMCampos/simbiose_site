<template>
  <q-page class="col q-mr-md">
    <div class="row col-12">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <q-img src="../assets/illustrations/blob.svg">
          <div class="absolute-center text-h3 flex flex-center" style="background: none; font-weight: bold;">
            a comunidade digital que facilita a entre-ajuda
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <q-img src="../assets/illustrations/undraw_collaborators_re_hont.svg" style="top:25%">
        </q-img>
      </div>
    </div>

    <div class="row col-6 form-identity-wrapper" style>
      <q-btn rounded outline size="15px" :color="identityType == 0 ? 'primary' : 'standard'"
        @click="() => { changeIdentity(0) }">
        <div class="row items-center no-wrap">
          <div class="text-center">
            Sou uma empresa
          </div>
        </div>
      </q-btn>

      <q-btn rounded outline size="15px" :color="identityType == 1 ? 'primary' : 'standard'"
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

      <q-form @submit="onSubmit" @reset="onReset" ref="myForm" class="q-gutter-md">
        <q-input filled v-model="name" label="Nome *" hint="Nome" lazy-rules
          :rules="[val => val && val.length > 0 || 'Campo obrigatório']" />

        <q-input filled v-model="email" type="email" label="E-mail *" hint="E-mail" lazy-rules
          :rules="[val => !!val || 'Campo obrigatório', this.isValidEmail]" />

        <q-input filled type="tel" v-model="mobile" label="Número de telémovel" hint="Número de telémovel" />

        <q-input filled type="textarea" v-model="description" label="Nota" hint="Nota" lazy-rules
          :rules="[val => 'Precisa aceitar']" />

        <q-toggle v-model="termsAccepted" label="Aceito os termos" />

        <div>
          <q-btn :disabled="!this.termsAccepted" label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      identityType: 0,
      name: null,
      email: null,
      mobile: null,
      description: null,

      termsAccepted: false
    }
  },

  methods: {

    changeIdentity(identityType) {
      this.identityType = identityType
    },

    isValidEmail(email) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(email) || 'Email inválido';
    },

    onSubmit() {

      const myForm = ref(null)

      myForm.value.validate().then(success => {
        if (success) {
          const test = { identityType: this.identityType, name: this.name, email: this.email, mobile: this.mobile, description: this.description, termsAccepted: this.termsAccepted };
          debugger;
        }
      })


    },

    onReset() {
      this.identityType = 0
      this.name = null
      this.email = null
      this.mobile = null
      this.description = null
      this.termsAccepted = false
    }
  }
}
</script>
