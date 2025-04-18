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
import { Header } from './components/Header'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap',
  },
]

export default function App() {
  return (
    <html
      lang="en"
      className="
      bg-slate-950
      lg:prose-md
      py-10
      prose-headings:text-white
      prose-p:text-slate-400
      prose-strong:text-slate-400
      prose-a:text-yellow-400
      prose-ul:text-slate-400"
    >
      <head>
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta name="title" content="Måns Nilsson" />
        <Meta />
      </head>
      <body
        style={{ width: '75ch', maxWidth: '100%', padding: '0 1rem' }}
        className="flex flex-col justify-center align-center m-auto"
      >
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  )
}
