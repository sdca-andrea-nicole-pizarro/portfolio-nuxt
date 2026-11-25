<script setup lang="ts">
import { Mail, GitBranch, Code } from 'lucide-vue-next'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-base-300 bg-base-100/85 backdrop-blur">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row sm:px-6 lg:px-8"
    >
      <p class="text-base-content/70">© {{ year }} {{ siteProfile.name }}. All rights reserved.</p>

      <ul class="flex flex-wrap items-center justify-center gap-1">
        <li>
          <a :href="`mailto:${siteProfile.email}`" class="btn btn-ghost btn-sm gap-2">
            <Mail :size="16" aria-hidden="true" />
            Email
          </a>
        </li>
        <li>
          <a :href="siteProfile.github" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm gap-2">
            <GitBranch :size="16" aria-hidden="true" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm gap-2">
            <Code :size="16" aria-hidden="true" />
            Built with Nuxt
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>