<script setup>
import ActionItem from './ActionItem.vue'
import IconPortfolio from './icons/IconPortfolio.vue'
// import IconContact from './icons/IconContact.vue'
import IconSocial from './icons/IconSocial.vue'
import SocialModal from './modals/SocialModal.vue'
</script>

<template>
  <ActionItem>
    <template #icon>
      <IconPortfolio></IconPortfolio>
    </template>
    <template #heading>
      <a
        v-button.outlined
        href="https://ash.ashwigltd.com"
        target="_blank"
        rel="noreferrer"
      >
        <ui-icon size="18">launch</ui-icon> Personal Website
      </a>
    </template>
  </ActionItem>

  <!-- <ActionItem>
    <template #icon>
      <IconContact />
    </template>
    <template #heading>Contact</template>

    You may contact me using <a>this form</a> if you don&apos;t want to leave
    this webpage for the one listed above, for whatever reason.
  </ActionItem> -->

  <ActionItem>
    <template #icon>
      <IconSocial></IconSocial>
    </template>
    <template #heading>
      <SocialModal></SocialModal>
    </template>
  </ActionItem>
</template>

<style>
.material-icons-outlined.md-18,
.material-icons-round.md-18,
.material-icons-two-tone.md-18,
.material-icons.md-18 {
  display: inline-block;
  margin-left: 0;
  margin-right: 8px;
  position: relative;
  vertical-align: top;
}
</style>
