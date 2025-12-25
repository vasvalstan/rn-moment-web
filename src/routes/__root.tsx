import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Moment — Mindful Meditation' },
      { name: 'description', content: 'Find stillness. Gain clarity. A minimal meditation app designed for deep focus and mindful living.' },
      { name: 'theme-color', content: '#121212' },
      { property: 'og:title', content: 'Moment — Mindful Meditation' },
      { property: 'og:description', content: 'Find stillness. Gain clarity. A minimal meditation app designed for deep focus and mindful living.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-[#121212] text-[#ECECEC] antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
