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

const Cards = ({ data }) => {
  return (
    <div className='w-[65%] mx-auto rounded mb-20 flex justify-between'>
      <div className='grid md:grid-cols-3 w-full gap-5'>
        {data?.map(card => {

          let mask = card.mask === 'required' ? RequiredMask : RecommendedMask
          let towel = card.towel === 'required' ? RequiredTowel : RecommendedTowel
          let fountain = card.fountain === 'partial' ? ParcialFountain : ForbiddenFountain
          let lockerroom = ''
          if (card.locker_room === 'allowed') lockerroom = RequiredLockerRoom
          if (card.locker_room === 'partial') lockerroom = ParcialLockerRoom
          if (card.locker_room === 'closed') lockerroom = ForbiddenLockerRoom


          return (
            <div className='w-[100%] bg-[#f5f5f5] mb-3 p-6 rounded-xl shadow-xl'>
              {card.opened === true ?
                <p className='text-new-green font-bold'>Aberto</p> :
                <p className='text-new-red font-bold'>Fechado</p>}
              <p className='text-3xl font-bold text-new-dark-grey'>{card.title}</p>
              <p dangerouslySetInnerHTML={{ __html: card.content }}></p>
              <div className='h-[2px] bg-new-light-grey my-4'></div>
              <div className='flex w-[100%]'>
                <img className='w-[25%] h-[25%]' src={mask} alt={mask} />
                <img className='w-[25%] h-[25%]' src={towel} alt={towel} />
                <img className='w-[25%] h-[25%]' src={fountain} alt={fountain} />
                <img className='w-[25%] h-[25%]' src={lockerroom} alt={lockerroom} />
              </div>
              <div className='grid md:grid-cols-2'>
                {card?.schedules?.map(schedule => {
                  return (
                    <div className='my-4'>
                      <p className='text-2xl font-bold text-new-dark-grey'>{schedule.weekdays}</p>
                      <p>{schedule.hour}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards