<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

withDefaults(defineProps<{ showLabels?: boolean }>(), { showLabels: true })
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li v-for="item in siteSocials" :key="item.label">
      <a
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
        :aria-label="item.label"
        class="btn btn-ghost btn-sm gap-2"
      >
        <component :is="item.icon" :size="18" aria-hidden="true" />
        <span v-if="showLabels">{{ item.label }}</span>
        <ExternalLink v-if="item.external && showLabels" :size="14" aria-hidden="true" class="opacity-60" />
      </a>
    </li>
  </ul>
</template>