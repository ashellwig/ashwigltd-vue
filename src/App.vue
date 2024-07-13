<script setup>
import BrandIntro from './components/BrandIntro.vue'
import TheActions from './components/TheActions.vue'
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.png"
      width="192"
      height="192"
    />

    <div class="wrapper">
      <BrandIntro msg="AshWig, Ltd." />
    </div>
  </header>

  <main>
    <TheActions />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  animation: mainLogoBounce 2s ease 0s 1 normal forwards;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

@keyframes mainLogoBounce {
  0% {
    animation-timing-function: ease-in;
    opacity: 0;
    transform: scale(0);
  }

  38% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: scale(1);
  }

  55% {
    animation-timing-function: ease-in;
    transform: scale(0.7);
  }

  72% {
    animation-timing-function: ease-out;
    transform: scale(1);
  }

  81% {
    animation-timing-function: ease-in;
    transform: scale(0.84);
  }

  89% {
    animation-timing-function: ease-out;
    transform: scale(1);
  }

  95% {
    animation-timing-function: ease-in;
    transform: scale(0.95);
  }

  100% {
    animation-timing-function: ease-out;
    transform: scale(1);
  }
}
</style>
