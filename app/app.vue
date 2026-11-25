<script setup lang="ts">
// Every page sets its own title with useHead(); this template adds the site name.
useHead({
  titleTemplate: (title) => (title ? `${title} | ${siteProfile.name}` : siteProfile.name),
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template> 