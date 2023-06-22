export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Pseudo Crowed",
  description:
    "Improve the quality of your code, step by step.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Crow",
      href: "/crow",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
