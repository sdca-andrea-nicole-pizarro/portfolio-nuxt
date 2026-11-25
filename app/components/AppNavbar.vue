<script setup lang="ts">
import { Menu, X, Mail, SearchX } from 'lucide-vue-next'

const route = useRoute()
const open = ref(false)

// Close the mobile menu after navigating.
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)

const current = computed(() => siteNav.find((item) => item.to === route.path))
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-base-300 bg-base-100/85 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="btn btn-ghost btn-square lg:hidden"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        >
          <X v-if="open" :size="22" aria-hidden="true" />
          <Menu v-else :size="22" aria-hidden="true" />
        </button>

        <!-- Brand on small screens (the sidebar has it on desktop) -->
        <NuxtLink to="/" class="flex items-center gap-2 font-display text-lg font-bold lg:hidden">
          <ProfileAvatar size="sm" />
          <span>{{ siteProfile.firstName }} Pizarro</span>
        </NuxtLink>

        <!-- Current page on desktop -->
        <p class="hidden items-center gap-2 font-display text-lg font-semibold lg:flex">
          <component :is="current?.icon ?? SearchX" :size="20" class="text-accent" aria-hidden="true" />
          {{ current?.label ?? 'Page not found' }}
        </p>
      </div>

      <NuxtLink to="/contact" class="btn btn-primary btn-sm sm:btn-md gap-2">
        <Mail :size="18" aria-hidden="true" />
        Contact
      </NuxtLink>
    </div>

    <nav v-if="open" id="mobile-menu" class="border-t border-base-300 bg-base-100 lg:hidden" aria-label="Primary">
      <ul class="menu mx-auto w-full max-w-5xl gap-1 p-3">
        <li v-for="item in siteNav" :key="item.to">
          <NuxtLink :to="item.to" exact-active-class="menu-active" class="gap-3 text-base">
            <component :is="item.icon" :size="20" aria-hidden="true" />
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>