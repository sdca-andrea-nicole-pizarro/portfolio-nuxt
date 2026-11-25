<template>
  <aside
    class="fixed inset-y-0 left-0 z-20 hidden w-72 flex-col border-r border-base-300 bg-base-100/85 p-6 backdrop-blur lg:flex"
    aria-label="Sidebar"
  >
    <NuxtLink to="/" class="flex flex-col items-center gap-3 text-center" aria-label="Go to the home page">
      <ProfileAvatar size="lg" />
      <div>
        <p class="font-display text-xl font-bold leading-tight">{{ siteProfile.name }}</p>
        <p class="mt-1 text-sm text-base-content/70">{{ siteProfile.title }}</p>
      </div>
    </NuxtLink>

    <span class="badge badge-primary mx-auto mt-3 gap-1.5 py-3">
      <Sparkles :size="14" aria-hidden="true" />
      {{ siteProfile.tagline }}
    </span>

    <nav class="mt-8" aria-label="Primary">
      <ul class="menu w-full gap-1 p-0">
        <li v-for="item in siteNav" :key="item.to">
          <NuxtLink :to="item.to" exact-active-class="menu-active" class="gap-3 text-base">
            <component :is="item.icon" :size="20" aria-hidden="true" />
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="mt-auto border-t border-base-300 pt-4">
      <p class="mb-2 flex items-center gap-2 text-sm text-base-content/70">
        <GraduationCap :size="16" aria-hidden="true" />
        {{ siteProfile.school }}
      </p>
      <SocialLinks />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Sparkles, GraduationCap } from 'lucide-vue-next'
</script>