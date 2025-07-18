import { css } from '@linaria/core'

export const globalStyles = css`
  :global() {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
    }

    html {
      background-color: #020617; /* slate-950 */
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
      line-height: 1.5;
      tab-size: 4;
      font-family: 'Roboto', sans-serif;
    }

    body {
      width: min(75ch, 100%);
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
      font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
        'Noto Color Emoji';
      color: white;
      margin: 0;
    }

    p {
      color: #94a3b8; /* slate-400 */
      font-size: 1.125rem;
      margin-bottom: 1.5rem;
    }

    strong {
      color: #94a3b8; /* slate-400 */
    }

    a {
      text-decoration: none;
      color: #facc15; /* yellow-400 */
    }

    .link {
      position: relative;
      display: inline-block;
      text-decoration: none;
      padding-bottom: 2px; /* space for underline */
    }

    .link::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: currentColor;
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.3s ease;
    }

    .link:hover::after {
      transform: scaleX(1);
    }

    ul {
      margin: 0;
      color: #94a3b8; /* slate-400 */
    }
  }
`
