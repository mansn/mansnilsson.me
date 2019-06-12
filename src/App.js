import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import me from '../src/assets/me.png'
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
                  <img src={me} className="me-logo" alt="månsnilsson" />
                  <h1>Måns Nilsson</h1>
                </header>
                <footer>
                  <a href="http://twitter.com/the_mni">twitter</a>•
                  <a href="http://github.com/mansn">github</a>
                </footer>
              </main>
            </animated.div>
          )
      )}
    </div>
  )
}

export default App
