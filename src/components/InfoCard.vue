<template>
    <q-card>
          <q-card-section class="bg">
            <div class="text-h6 text-center">
              {{titleName}}
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="q-pa-lg">
            <div v-for="bullet in bullets" :key="bullet.id" class="text-subtitle1 text-center">
              {{bullet.text}}
            </div>
          </q-card-section>

          <q-card-actions align="center" class="q-pa-md">
            <q-btn rounded
              @click="$emit('selected',id)" style="background-color:#0B5351; color:white">
                  {{buttonText}}
            </q-btn>
          </q-card-actions>
        </q-card> 
</template>

<script>
  export default {
    props: {
      'id': Number,
      'titleName': String,
      'bullets': Array,
      'buttonText': String
    }
}

</script>