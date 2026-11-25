<script setup lang="ts">
import { FolderKanban, Mail, Sparkles } from 'lucide-vue-next'

const route = useRoute()
const description =
  'Andrea Nicole Pizarro is an aspiring UI/UX developer who is eager to learn. Browse her school projects, mobile apps and web systems.'

// Page title
useHead({
  title: 'Aspiring UI/UX Developer',
  link: [{ rel: 'canonical', href: pageUrl(route.path) }],
})

// Page SEO information
useSeoMeta(buildSeo({ title: 'Aspiring UI/UX Developer', description, path: route.path }))
</script>

<template>
  <div class="space-y-12">
    <!-- Hero -->
    <section class="rounded-box border border-base-300 bg-base-100/80 p-6 backdrop-blur-sm sm:p-10">
      <div class="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div class="max-w-xl">
          <p class="badge badge-primary mb-4 gap-1.5 py-3">
            <Sparkles :size="14" aria-hidden="true" />
            {{ siteProfile.tagline }}
          </p>
          <h1 class="text-4xl font-extrabold leading-tight sm:text-6xl">Hi, I’m {{ siteProfile.name }}.</h1>
          <p class="mt-4 text-xl font-medium text-accent">{{ siteProfile.title }}</p>
          <p class="mt-3 text-lg text-base-content/80">
            I’m a student at {{ siteProfile.school }} who builds school projects from Android apps to web systems,
            and I’m always learning the next tool.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <NuxtLink to="/projects" class="btn btn-primary gap-2">
              <FolderKanban :size="20" aria-hidden="true" />
              See my projects
            </NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary gap-2">
              <Mail :size="20" aria-hidden="true" />
              Contact me
            </NuxtLink>
          </div>
        </div>
        <ProfileAvatar size="xl" />
      </div>
    </section>
  </div>
</template>