import type { Component } from 'vue'
import { House, User, FolderKanban, Mail, GitBranch } from 'lucide-vue-next'

export const siteProfile = {
  name: 'Andrea Nicole Pizarro',
  firstName: 'Andrea',
  initials: 'AP',
  title: 'Aspiring UI/UX Developer',
  tagline: 'Eager to Learn',
  school: 'St. Dominic College of Asia',
  photo: '/images/profile.jpg',
  email: 'andreanicole.pizarro@sdca.edu.ph',
  github: 'https://github.com/sdca-andrea-nicole-pizarro',
  bio: [
    'I’m a student at St. Dominic College of Asia who likes turning ideas into interfaces people can actually use.',
    'My coursework has taken me from Android apps with local databases to web systems and school-wide proposals, and each project has taught me something new about how people use software.',
    'I’m still early in my journey, which is exactly why I say yes to new tools and new problems.',
  ],
}

export type NavItem = { label: string; to: string; icon: Component }

export const siteNav: NavItem[] = [
  { label: 'Home', to: '/', icon: House },
  { label: 'About', to: '/about', icon: User },
  { label: 'Projects', to: '/projects', icon: FolderKanban },
  { label: 'Contact', to: '/contact', icon: Mail },
]

export type SocialItem = { label: string; href: string; icon: Component; external: boolean }

export const siteSocials: SocialItem[] = [
  { label: 'Email', href: `mailto:${siteProfile.email}`, icon: Mail, external: false },
  { label: 'GitHub', href: siteProfile.github, icon: GitBranch, external: true },
]