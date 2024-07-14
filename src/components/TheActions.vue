<script setup>
import ActionItem from './ActionItem.vue'
import IconPortfolio from './icons/IconPortfolio.vue'
// import PersonalWebsiteButton from './buttons/PersonalWebsiteButton.vue'
// import IconContact from './icons/IconContact.vue'
import IconSocial from './icons/IconSocial.vue'
import SocialModal from './modals/SocialModal.vue'
</script>

<template>
  <ActionItem>
    <template #icon>
      <IconPortfolio />
    </template>
    <template #heading
      ><ui-button outlined icon="launch"
        ><a href="https://ash.ashwigltd.com" target="_blank"
          >Personal Website &amp; Portfolio</a
        ></ui-button
      ></template
    >
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
      <IconSocial />
    </template>
    <template #heading>
      <SocialModal></SocialModal>
    </template>
  </ActionItem>
</template>
