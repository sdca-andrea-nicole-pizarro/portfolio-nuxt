<template>
  <div class="min-h-screen">
    <AppSidebar />
    <div class="flex min-h-screen flex-col lg:pl-72">
      <AppNavbar />
      <main class="flex flex-1 flex-col items-center gap-4 px-6 py-16 text-center">
        <ProfileAvatar size="xl" />
        <h1 class="text-4xl font-bold">{{ siteProfile.name }}</h1>
        <p class="text-base-content/70">{{ siteProfile.title }}</p>
        <SocialLinks />
      </main>
      <AppFooter />
    </div>
  </div>
</template>