export function pageUrl(path: string): string {
  const { public: pub } = useRuntimeConfig()
  const base = String(pub.siteUrl).replace(/\/$/, '')
  return `${base}${path === '/' ? '' : path}`
}

type SeoInput = {
  title: string
  description: string
  path: string
  noindex?: boolean
}

export function buildSeo({ title, description, path, noindex = false }: SeoInput) {
  const { public: pub } = useRuntimeConfig()
  const base = String(pub.siteUrl).replace(/\/$/, '')
  const fullTitle = `${title} | ${siteProfile.name}`
  const image = `${base}/og-image.png`

  return {
    description,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    author: siteProfile.name,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType: 'website' as const,
    ogUrl: pageUrl(path),
    ogImage: image,
    ogImageAlt: `${siteProfile.name}, ${siteProfile.title}`,
    ogSiteName: `${siteProfile.name} Portfolio`,
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image' as const,
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: image,
  }
}