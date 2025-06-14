import { css } from '@linaria/core'

export const globalStyles = css`
  :global() {
    html {
      background-color: #020617; /* slate-950 */
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
      line-height: 1.5;
      tab-size: 4;
      font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji';
    }
        

    body {
      width: 75ch;
      max-width: 100%;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: white;
      margin: 0;
    }

    p {
      font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji';
      color: #94a3b8; /* slate-400 */
    }

    span {
      font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
        'Noto Color Emoji';
    }

    strong {
      color: #94a3b8; /* slate-400 */
    }

    a {
      text-decoration: none;
      color: #facc15; /* yellow-400 */
    }
    
    a:hover {
      text-decoration: underline;
      color: #fbbf24; /* yellow-500 */
    }

    ul {
      margin: 0;
      color: #94a3b8; /* slate-400 */
    }
  }
`
