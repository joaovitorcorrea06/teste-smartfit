import React from 'react'
import Clock from '../assets/images/icon-hour.png'
import { useForm } from 'react-hook-form'

const Form = () => {

  const { register, handleSubmit } = useForm()

  function onSubmit(event) {
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-[70%] mx-auto border-2 rounded border-[#ededed] text-new-light-grey p-6 mb-20'>
      <div className='flex gap-4'>
        <img src={Clock} alt='Relógio' className='w-10' />
        <p className='text-2xl '>Horário</p>
      </div>
      <p className=' text-4xl mt-8'>Qual período quer treinar?</p>
      <div className='h-1 bg-[#ededed] my-4'></div>
      <div className='w-full flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <input {...register("periodo")} type="radio" value="manha" className="w-7 h-7 appearance-none transition-colors rounded-full checked:bg-new-light-grey checked:border-new-light-grey checked:text-new-light-grey border-2" />
          <p className='text-2xl'>Manhã</p>
        </div>
        <p className='text-2xl'>06:00 às 12:00</p>
      </div>
      <div className='h-1 bg-[#ededed] my-4'></div>
      <div className='w-full flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <input {...register("periodo")} type="radio" value="tarde" className="w-7 h-7 appearance-none transition-colors rounded-full checked:bg-new-light-grey checked:border-new-light-grey checked:text-new-light-grey border-2" />
          <p className='text-2xl'>Tarde</p>
        </div>
        <p className='text-2xl'>12:01 às 18:00</p>
      </div>
      <div className='h-1 bg-[#ededed] my-4'></div>
      <div className='w-full flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <input {...register("periodo")} type="radio" value="noite" className="w-7 h-7 appearance-none transition-colors rounded-full checked:bg-new-light-grey checked:border-new-light-grey checked:text-new-light-grey border-2" />
          <p className='text-2xl'>Noite</p>
        </div>
        <p className='text-2xl'>18:01 às 23:00</p>
      </div>
      <div className='h-1 bg-[#ededed] my-4'></div>

      <div className='w-full flex items-center justify-between mt-16'>
        <div className='flex gap-3 items-center'>
          <input type="checkbox" {...register("unidades_fechadas")} className='w-5 h-5' />
          <p className='text-2xl'>Exibir unidades fechadas</p>
        </div>
        <p className='text-2xl'>Resultados encontrados: <span className='font-extrabold'>0</span></p>
      </div>

      <div className='flex justify-center items-center gap-4 mt-10'>
        <button className='bg-new-yellow text-black font-bold py-4 min-w-[30%] rounded' type='submit'>ENCONTRAR UNIDADE</button>
        <button className='border-2 border-new-light-grey  text-black font-bold py-4 min-w-[30%] rounded' type='reset'>LIMPAR</button>
      </div>

    </form>
  )
}

export default Form