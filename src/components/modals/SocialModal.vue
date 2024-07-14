<script>
export default {
  data() {
    return {
      open: false,
      socials: [
        {
          aria: 'LinkTree',
          icon: 'fa-solid fa-link',
          link: 'https://linktr.ee/ashwig',
          target: '_blank',
          rel: 'noreferrer',
          username: 'ashwig'
        },
        {
          aria: 'Twitch',
          icon: 'fa-brands fa-twitch',
          link: 'https://twitch.tv/ashhellwig',
          target: '_blank',
          rel: 'noreferrer',
          username: 'AshHellwig'
        },
        {
          aria: 'YouTube',
          icon: 'fa-brands fa-youtube',
          link: 'https://youtube.com/@ashhellwig',
          target: '_blank',
          rel: 'noreferrer',
          username: '@ashhellwig'
        },
        {
          aria: 'Instagram',
          icon: 'fa-brands fa-instagram',
          link: 'https://instagram.com/toyotatrapstar',
          target: '_blank',
          rel: 'noreferrer',
          username: '@toyotatrapstar'
        },
        {
          aria: 'Twitter',
          icon: 'fa-brands fa-twitter',
          link: 'https://twitter.com/hellwigashton',
          target: '_blank',
          rel: 'noreferrer',
          username: '@hellwigashton'
        },
        {
          aria: 'GitHub',
          icon: 'fa-brands fa-github',
          link: 'https://github.com/ashellwig',
          target: '_blank',
          rel: 'noreferrer',
          username: '@ashellwig'
        },
        {
          aria: 'LinkedIn',
          icon: 'fa-brands fa-linkedin',
          link: 'https://www.linkedin.com/in/ahellwig',
          target: '_blank',
          rel: 'noreferrer',
          username: '/in/ahellwig'
        }
      ]
    }
  }
}
</script>

<template>
  <ui-button oulined @click="open = true" icon="photo_camera_front"
    >Social Media Links</ui-button
  >

  <ui-dialog v-model="open">
    <ui-dialog-title closable>Follow Me!</ui-dialog-title>
    <ui-dialog-content>
      <ui-list :type="2">
        <ui-nav-item
          v-for="(social, index) in socials"
          :key="index"
          :href="social.link"
          :target="social.target"
          :rel="social.rel"
        >
          <ui-item-first-content>
            <font-awesome-icon :icon="social.icon"></font-awesome-icon>
          </ui-item-first-content>
          <ui-item-text-content>
            <ui-item-text1>
              {{ social.aria }}
            </ui-item-text1>
            <ui-item-text2>({{ social.username }})</ui-item-text2>
          </ui-item-text-content>
        </ui-nav-item>
      </ui-list>
    </ui-dialog-content>
  </ui-dialog>
</template>

<style>
#app
  > main
  > div:nth-child(2)
  > div
  > h3
  > div
  > div.mdc-dialog__container
  > div.mdc-dialog__surface {
  background-color: var(--vt-c-black-ish-opaque) !important;
}

.mdc-deprecated-list-item__graphic {
  color: var(--mdc-theme-primary) !important;
}

.mdc-dialog__title {
  color: var(--mdc-theme-primary) !important;
}

.mdc-dialog__close {
  color: var(--mdc-theme-primary) !important;
}

.mdc-deprecated-list-item__primary-text {
  color: var(--mdc-theme-primary) !important;
}

.mdc-deprecated-list-item__secondary-text {
  color: var(--mdc-theme-primary-dark) !important;
}
</style>
