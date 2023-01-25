import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='flex flex-row justify-between h-24 w-full items-center'>
      <div className = 'h-2/5'>
        <img src="./logo.svg" alt="LOGO" className = 'h-full' />
      </div>

      <ul className='font-serif text-green-100 flex justify-between gap-8 font-medium'>
        <li><a href="">ABOUT</a></li>
        <li><a href="">SKILLS</a></li>
        <li><a href="">PORTFOLIO</a></li>
        <li><a href="">CONTACT</a></li>
      </ul>

      <div>
        <Button title = "Resume" />
      </div>
    </div>
  )
}

export default Header