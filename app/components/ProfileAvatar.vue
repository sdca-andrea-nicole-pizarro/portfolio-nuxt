<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: 'sm' | 'md' | 'lg' | 'xl' }>(), { size: 'md' })

const sizes = {
  sm: 'size-9 text-sm',
  md: 'size-14 text-lg',
  lg: 'size-28 text-3xl',
  xl: 'size-40 text-5xl',
} as const

const failed = ref(false)
const img = ref<HTMLImageElement | null>(null)

onMounted(() => {
  if (img.value && img.value.complete && img.value.naturalWidth === 0) failed.value = true
})
</script>

<template>
  <div
    :class="[
      'flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary font-display font-bold text-primary-content ring-2 ring-base-100',
      sizes[props.size],
    ]"
  >
    <img
      v-if="!failed"
      ref="img"
      :src="siteProfile.photo"
      :alt="`Portrait of ${siteProfile.name}`"
      class="size-full object-cover"
      @error="failed = true"
    />
    <span v-else aria-hidden="true">{{ siteProfile.initials }}</span>
  </div>
</template>