import { Outlet } from '@remix-run/react'

const DigitalGarden = () => {
  return (
      <div className="bg-slate-100 grid my-0 mx-auto grid-cols-3">
        <div className="grid-cols-2 my-0 mx-auto bg-slate-100">
          <div className="max-w-4xl flex flex-wrap flex-row text-center justify-center">
            <a
              className="border-x-gray-500 flex items-center justify-center p-16 rounded 
          m-16 whitespace-pre-line shadow-black transition ease-in-out delay-300
          w-fit hover:scale-1
          text-white"
              href="/my-journey-2009-2024"
            >
              <span className='text-white'>
                {`My Journey
                2009 - 2024`}
              </span>
            </a>
            <a className='' href="/people-that-inspire-me">
              <span className='text-white'>{`People That
              Inspire Me`}</span>
            </a>
            <div className='flex items-center justify-center p-2 rounded whitespace-pre-line shadow-black'>
              <span className='text-white'>{`Upcoming Post test`}</span>
            </div>
            <div>
              <span className='text-white'>{`Upcoming Post`}</span>
            </div>
            <div>
              <span className='text-white'>{`Upcoming Post`}</span>
            </div>
          </div>
          <span>
            Inspired by:{' '}
            <a href="https://joelhooks.com/digital-garden">
              Joel Hooks' Digital Garden
            </a>
          </span>
          <Outlet />
        </div>
      </div>
  )
}

export default DigitalGarden
