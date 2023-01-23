import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between align-middle h-24 w-full'>
      <div>
        <img src="./logo.svg" alt="" />
      </div>

      <ul className='font-serif text-green-100 flex justify-between'>
        <li><a href="">ABOUT</a></li>
        <li><a href="">SKILLS</a></li>
        <li><a href="">PORTFOLIO</a></li>
        <li><a href="">CONTACT</a></li>
      </ul>

      <div>
        <button>Resume</button>
      </div>
    </div>
  )
}

export default Header