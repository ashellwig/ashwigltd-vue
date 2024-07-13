<script setup>
import ActionItem from './ActionItem.vue'
import IconPortfolio from './icons/IconPortfolio.vue'
import IconContact from './icons/IconContact.vue'
import IconSocial from './icons/IconSocial.vue'
</script>

<template>
  <ActionItem>
    <template #icon>
      <IconPortfolio />
    </template>
    <template #heading>Personal Website &amp; Portfolio</template>

    View my personal website, along with a detailed portfolio
    <a>here</a>.
  </ActionItem>

  <ActionItem>
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
  </ActionItem>
</template>
