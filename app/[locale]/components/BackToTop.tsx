'use client'

import React, { useEffect, useState } from 'react'
import TopIcon from './common/Icons/top-icon'

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div>
        {backToTopButton && (
          <button
            className="backtoTop"
            style={{
              position: 'fixed',
              bottom: '50px',
              right: '20px',
              height: '50px',
              width: '50px',
              zIndex: '29',
              fontSize: '30px',
            }}
            onClick={scrollUp}
          >
            <TopIcon />
          </button>
        )}
      </div>
    </>
  )
}

export default BackToTop
