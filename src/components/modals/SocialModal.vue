<script>
export default {
  data() {
    return {
      open: false,
      socials: [
        {
          name: 'Instagram',
          icon: ''
        }
      ]
    }
  }
}
</script>

<template>
  <ui-button oulined @click="open = true">Social Media Links</ui-button>

  <ui-dialog v-model="open">
    <ui-dialog-title closable>Follow Me!</ui-dialog-title>
    <ui-dialog-content>
      <ui-list>
        <ui-item v-for="(social, index) in socials" :key="index">{{
          social.name
        }}</ui-item>
      </ui-list>
    </ui-dialog-content>
  </ui-dialog>
</template>
