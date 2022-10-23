import React from 'react'
import Header from '../../../components/Header'
import ItemCard from './ItemCard'


export default function Shoes() {
  return (
    <>
      <Header />
      <style jsx >{`.items-container{
    grid-template-columns: repeat(auto-fit, minmax(350px, 350px));`}</style>
      <div className='grid gap-10 items-container p-10 w-full justify-center'>
      <ItemCard title="Dalle Runners" price={54.99} link="/shoe1.png"/>
      <ItemCard title="Classic Skate" price={44.99} link="/shoe2.png" />
      <ItemCard title="Classic Skate Limited Edition" price={49.99} link="/shoe3.png" />
      </div>
    </>
  )
}
