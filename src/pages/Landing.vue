<template>
  <q-page class = "q-mr-md">
    <div class="row col-12">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <q-img src="../assets/illustrations/blob.svg">
          <div class="absolute-center text-h3 flex flex-center"
               style="background: none; font-weight: bold;">
            a comunidade digital que facilita a entre-ajuda
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <q-img src="../assets/illustrations/undraw_collaborators_re_hont.svg" style="top:25%">
        </q-img>
      </div>
    </div>
    
    <div class="q-pa-md" style="max-width: 400px">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

      </div>
  </q-page>
</template>

<script>
  export default {
    data () {
      return {
        name: null,
        age: null,

        accept: false
      }
    },

    methods: {
      onSubmit () {
        if (this.accept !== true) {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        this.name = null
        this.age = null
        this.accept = false
      }
    }
  }
</script>
