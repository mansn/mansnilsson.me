import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import styles from './tailwind.css?url'
import Footer from './shared/components/Footer'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function App() {
  return (
    <html
      lang="en"
      className="
      bg-slate-950
      prose
      lg:prose-md
      py-10
      prose-headings:text-white
      prose-p:text-slate-400
      prose-strong:text-slate-400
      prose-a:text-yellow-400
      prose-ul:text-slate-400
      container
      mx-auto
      font-montserrat"
    >
      <head>
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta name="title" content="Måns Nilsson" />
        <Meta />
      </head>
      <body>
        <header className="text-center text-white mb-5">Måns Nilsson</header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  )
}
