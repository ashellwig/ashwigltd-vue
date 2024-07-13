<script setup>
import ActionItem from './ActionItem.vue'
import IconPortfolio from './icons/IconPortfolio.vue'
// import PersonalWebsiteButton from './buttons/PersonalWebsiteButton.vue'
// import IconContact from './icons/IconContact.vue'
// import IconSocial from './icons/IconSocial.vue'
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
  </ActionItem>

  <ActionItem>
    <template #icon>
      <IconSocial />
    </template>
    <template #heading>Social Media Links</template>

    If you are searching for my social media links, they can be found either on
    my personal website in the footer &mdash; or right
    <a>here</a>!
  </ActionItem> -->
</template>
