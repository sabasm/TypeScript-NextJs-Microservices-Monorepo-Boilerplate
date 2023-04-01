import HeroLayout from '@/layouts/HeroLayout'
import Button from '@/components/Button'
import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Homepage</h1>
      <h2>this is an h2</h2>
      <Button onClick={() => { console.log('button clicked') }} >
        Click me
      </Button>
    </>
  )
}

export default Home
