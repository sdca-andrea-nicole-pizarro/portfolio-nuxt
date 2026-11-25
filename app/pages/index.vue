<script setup lang="ts">
useHead({ title: 'Home' })
</script>

<template>
  <section class="flex flex-col items-center gap-4 py-10 text-center">
    <ProfileAvatar size="xl" />
    <h1 class="text-4xl font-bold">{{ siteProfile.name }}</h1>
    <p class="text-base-content/70">{{ siteProfile.title }}</p>
    <SocialLinks />
  </section>
</template>