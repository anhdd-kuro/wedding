import { defineConfig, sharpImageService } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://anh-an-wedding.vercel.app/",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
})
