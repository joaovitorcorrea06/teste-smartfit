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
    <div className='w-[65%] mx-auto bg-[#f5f5f5] rounded mb-20 flex justify-between p-6'>
      <div className='w-[22%] text-center'>
        <p className='font-bold text-xl' >Máscara</p>
        <div className='flex items-center justify-between px-10 gap-4'>
          <div className='flex flex-col items-center'>
            <img src={RequiredMask} alt='Required Mask' className='w-24' />
            <p className='text-xl'>Obrigatório</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={RecommendedMask} alt='Recommended Mask' className='w-24' />
            <p className='text-xl'>Recomendado</p>
          </div>
        </div>
      </div>
      <div className='w-[22%] text-center'>
        <p className='font-bold text-xl' >Toalha</p>
        <div className='flex items-center justify-between px-10 gap-4'>
          <div className='flex flex-col items-center'>
            <img src={RequiredTowel} alt='Required Mask' className='w-24' />
            <p className='text-xl'>Obrigatório</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={RecommendedTowel} alt='Recommended Mask' className='w-24' />
            <p className='text-xl'>Recomendado</p>
          </div>
        </div>
      </div>
      <div className='w-[22%] text-center'>
        <p className='font-bold text-xl' >Bebedouro</p>
        <div className='flex items-center justify-between px-10 gap-4'>
          <div className='flex flex-col items-center'>
            <img src={ParcialFountain} alt='Required Mask' className='w-24' />
            <p className='text-xl'>Parcial</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={ForbiddenFountain} alt='Recommended Mask' className='w-24' />
            <p className='text-xl'>Proibido</p>
          </div>
        </div>
      </div>
      <div className='w-[30%] text-center'>
        <p className='font-bold text-xl' >Vestiário</p>
        <div className='flex items-center justify-between px-10 gap-4'>
          <div className='flex flex-col items-center'>
            <img src={RequiredLockerRoom} alt='Required Mask' className='w-24' />
            <p className='text-xl'>Liberado</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={ParcialLockerRoom} alt='Required Mask' className='w-24' />
            <p className='text-xl'>Parcial</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={ForbiddenLockerRoom} alt='Recommended Mask' className='w-24' />
            <p className='text-xl'>Proibido</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Label