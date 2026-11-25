<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
    <ProfileAvatar size="xl" />
    <h1 class="text-4xl font-bold">{{ siteProfile.name }}</h1>
    <p class="text-base-content/70">{{ siteProfile.title }}</p>
    <ul class="flex flex-wrap justify-center gap-2">
      <li v-for="item in siteNav" :key="item.to">
        <span class="btn btn-ghost gap-2">
          <component :is="item.icon" :size="20" aria-hidden="true" />
          {{ item.label }}
        </span>
      </li>
    </ul>
  </div>
</template>