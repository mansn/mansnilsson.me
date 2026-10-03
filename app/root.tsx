import type { LinksFunction } from 'react-router'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { styled } from '@linaria/react'
import { globalStyles } from './styles/global'
import Footer from './shared/components/Footer'
import Header from './shared/components/Header'
import { MaxWidthWrapper } from './shared/components/FullWidthWrapper'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
  },
]

const LayoutContainer = styled.div`
  isolation: isolate;
  margin-inline: 10vw;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default function App() {
  return (
    <html lang="en" className={globalStyles}>
      <head>
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta name="title" content="Måns Nilsson" />
        <Meta />
      </head>
      <body>
        <Header />
        <LayoutContainer>
          <PageContainer>
            <MaxWidthWrapper>
              <Outlet />
            </MaxWidthWrapper>
          </PageContainer>
        </LayoutContainer>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
