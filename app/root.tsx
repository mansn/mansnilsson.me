import type { MetaFunction, LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
// import Header from '../app/shared/components/Header'

// import styles from "./tailwind.css";

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles}]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Måns Nilsson',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html
      lang="en"
      className="bg-slate-900 prose lg:prose-xl py-10 prose-headings:text-white prose-p:text-slate-400 prose-strong:text-slate-400 prose-a:text-yellow-400 container mx-auto"
    >
      <head>
        <Links />
        <Meta />
      </head>
      <body>
        {/* <Header /> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
