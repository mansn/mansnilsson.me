import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import './App.css'

function App() {
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
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
                    <img
                      src="/images/me.jpg"
                      className="me-logo"
                      alt="månsnilsson"
                    />
                  </picture>
                  <div className="name">
                    <h1>Måns Nilsson</h1>
                  </div>
                </header>
                <main>
                  <preamble className="intro">
                    Hi! I'm a web developer with an extensive QA background.
                  </preamble>
                  <h3>Background</h3>
                  <p>
                    Over the last 4-5 years I've accelerated my web development
                    skills because I wanted to transition into a web developer
                    role.
                  </p>
                  <p>
                    I truly believe that the QA mindset is something that is
                    part of e.g. a developer role. It's not something that
                    someone else should take care of instead of you.
                  </p>
                  <p>
                    I work as a consultant at{' '}
                    <a href="https://www.diabol.se/">Diabol</a> today, mainly
                    within test automation and QA coaching roles. <br/>I try to
                    friendly promote ways of transition out of the QA safety-net
                    approach, at the same time as I'm exiting it myself. =)
                  </p>
                  <h3>Portfolio</h3>
                  <div className="portfolio">
                    <a href="https://github.com/weaddquality/business-model-canvas">
                      Business Model Canvas (React Web App)
                    </a>
                    <a href="https://github.com/weaddquality/bmc-aws-lambda-serverless">
                      Business Model Canvas (Serverless backend)
                    </a>
                    <a href="https://workout.mansnilsson.me/">
                      Workout App{' '}
                      <span role="img" aria-label="Man Weightlifter">
                        🏋️‍♂️ (React JAMStack App)
                      </span>
                    </a>
                  </div>
                  {/* </div> */}
                </main>

                <footer>
                  <ul>
                    <li>
                      <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/mansnilsson1/"
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>LinkedIn icon</title>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="https://twitter.com/the_mni">
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Twitter icon</title>
                          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="github" href="https://github.com/mansn">
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub icon</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                        </svg>
                      </a>
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
