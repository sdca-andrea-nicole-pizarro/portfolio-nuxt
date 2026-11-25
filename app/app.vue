<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
    <ProfileAvatar size="xl" />
    <h1 class="text-4xl font-bold">{{ siteProfile.name }}</h1>
    <p class="text-base-content/70">{{ siteProfile.title }}</p>
  </div>
</template>