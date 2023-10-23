import React from 'react'
import Logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className='h-52 w-full bg-new-dark-grey flex items-center justify-center'>
      <div className='h-[100%] flex flex-col items-center justify-center'>
        <img src={Logo} alt='' className='h-[20%]' />
        <p className='text-white mt-5 text-xl'>Todos os direitos reservados - 2020</p>
      </div>

    </div>
  )
}

export default Footer