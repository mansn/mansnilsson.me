import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import './App.css'

function App() {
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 }
  })

  useEffect(() => {
    set(true)
  }, [set])

  return (
    <div className="App">
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <main>
                <header className="App-header">
                  <picture>
                    <source type="image/webp" srcSet="/images/me.webp" />
                    <img src="/images/me.jpg" className="me-logo" alt="månsnilsson" />
                  </picture>
                  <h1>Måns Nilsson</h1>
                </header>
                <footer>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/mansnilsson1/">linkedin</a>•
                    </li>
                    <li>
                      <a href="https://twitter.com/the_mni">twitter</a>•
                    </li>
                    <li>
                      <a href="https://github.com/mansn">github</a>
                    </li>
                  </ul>
                </footer>
              </main>
            </animated.div>
          )
      )}
    </div>
  )
}

export default App
