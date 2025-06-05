import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    document.title = 'About | Neura'
  }, [])
  return (
    <div>About</div>
  )
}

export default About