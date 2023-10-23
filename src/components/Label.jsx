import React from 'react'

import RequiredMask from '../assets/images/required-mask.png'
import RecommendedMask from '../assets/images/recommended-mask.png'

import RequiredTowel from '../assets/images/required-towel.png'
import RecommendedTowel from '../assets/images/recommended-towel.png'

import ParcialFountain from '../assets/images/partial-fountain.png'
import ForbiddenFountain from '../assets/images/forbidden-fountain.png'

import RequiredLockerRoom from '../assets/images/required-lockerroom.png'
import ParcialLockerRoom from '../assets/images/partial-lockerroom.png'
import ForbiddenLockerRoom from '../assets/images/forbidden-lockerroom.png'

const Label = () => {
  return (
    <div className='w-[90%]  md:w-[65%] mx-auto bg-[#f5f5f5] rounded mb-20 flex flex-col md:flex-row lg:flex-row justify-between p-6'>
      <div className='w-[100%] md:w-[22%] lg:w-[22%] text-center mb-4 md:mb-0 lg:mb-0'>
        <p className='font-bold text-xl mb-4' >Máscara</p>
        <div className='flex items-center justify-center px-10 gap-4'>
          <div className='flex flex-col items-center'>
            <img src={RequiredMask} alt='Required Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Obrigatório</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={RecommendedMask} alt='Recommended Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Recomendado</p>
          </div>
        </div>
      </div>
      <div className='w-[100%] md:w-[22%] lg:w-[22%] text-center mb-4 md:mb-0 lg:mb-0'>
        <p className='font-bold text-xl mb-4' >Toalha</p>
        <div className='flex items-center justify-center px-10 gap-4'>
          <div className='flex flex-col items-center'>
            <img src={RequiredTowel} alt='Required Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Obrigatório</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={RecommendedTowel} alt='Recommended Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Recomendado</p>
          </div>
        </div>
      </div>
      <div className='w-[100%] md:w-[22%] lg:w-[22%] text-center mb-4 md:mb-0 lg:mb-0'>
        <p className='font-bold text-xl mb-4' >Bebedouro</p>
        <div className='flex items-center justify-center px-10 gap-4'>
          <div className='flex flex-col items-center justify-center'>
            <img src={ParcialFountain} alt='Required Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Parcial</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={ForbiddenFountain} alt='Recommended Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Proibido</p>
          </div>
        </div>
      </div>
      <div className='w-[100%] md:w-[30%] lg:w-[30%] text-center'>
        <p className='font-bold text-xl mb-4' >Vestiário</p>
        <div className='flex items-center justify-between px-10 gap-4'>
          <div className='flex flex-col items-center'>
            <img src={RequiredLockerRoom} alt='Required Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Liberado</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={ParcialLockerRoom} alt='Required Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Parcial</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={ForbiddenLockerRoom} alt='Recommended Mask' className='w-14 md:w-24' />
            <p className='text-xl'>Proibido</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Label