<template>
  <q-item
    clickable
    :to="route"
    class="curvy-header"
  >
    <q-item-section>
      <q-item-label style="padding-left: 2em; font-size: 1.5em;">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    route: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.curvy-header {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>