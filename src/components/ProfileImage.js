import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import imageAsWebP from '../images/me.webp'
import meDesktopImgJpg from '../images/me_1080.jpg'
import meMobileImgJpg from '../images/me_480.jpg'
import meDesktopImgWebp from '../images/me_1080.webp'
import meMobileImageWebp from '../images/me_480.webp'
import lqip from 'lqip.macro'
import IdealImage from 'react-ideal-image'
const placeholder = lqip('../images/me.jpg')

const ProfileImage = () => {
  return (
    <IdealImage
      placeholder={{ lqip: placeholder }}
      srcSet={[
        { width: 480, src: meMobileImgJpg },
        { width: 1080, src: meDesktopImgJpg },
        { width: 480, src: meMobileImageWebp },
        { width: 1080, src: meDesktopImgWebp },
      ]}
      alt="me me me"
      width={343}
      height={228}
      className="me-logo"
      shouldAutoDownload={() => true}
      theme={{
        placeholder: {
          backgroundImage: placeholder,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: 'auto',
          borderRadius: '50%',
        },
      }}
    />
  )
}

export default ProfileImage
