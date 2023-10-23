import React from 'react'
import Logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <header className='w-full flex flex-col items-center justify-center'>
      <div className='h-[126px] bg-black w-full p-10 flex items-center justify-center'>
        <img src={Logo} alt='' className='h-[150%]' />
      </div>
      <div className='w-[65%] mt-24'>
        <h1 className='text-new-dark-grey font-bold text-5xl'>REABERTURA</h1>
        <h1 className='text-new-dark-grey font-bold text-5xl'>SMART FIT</h1>
        <div className='h-2 bg-new-dark-grey w-[10%] my-10'></div>
        <p className='text-xl mb-10'>
          O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>
    </header>


  )
}

export default Header