import React, { useEffect } from 'react'

const Explore = () => {

  useEffect(() => {
    document.title = 'Explore | Neura'
  }, [])
  return (
    <div>Explore</div>
  )
}

export default Explore