<template>
  <div class="min-h-screen">
    <a href="#main" class="skip-link">Skip to content</a>

    <!-- Interactive canvas behind everything -->
    <InteractiveBackground />

    <!-- Desktop sidebar -->
    <AppSidebar />

    <div class="flex min-h-screen flex-col lg:pl-72">
      <AppNavbar />
      <main id="main" class="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>