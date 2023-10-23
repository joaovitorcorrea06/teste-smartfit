import React from 'react'
import Clock from '../assets/images/icon-hour.png'
import { useForm } from 'react-hook-form'

const Form = ({ data, filteredData, setFilteredData }) => {

  const { register, handleSubmit, setValue } = useForm()

  function isTimeInRange(time, startTime, endTime) {
    // Extract the start and end times from the format "06h às 22h"
    const [start, end] = time.split(" às ").map((t) => t.split(" ")[0]);

    const currentTime = new Date(0, 0, 0, parseInt(start), 0);
    const currentStart = new Date(0, 0, 0, parseInt(startTime.split(":")[0]), parseInt(startTime.split(":")[1]));
    const currentEnd = new Date(0, 0, 0, parseInt(endTime.split(":")[0]), parseInt(endTime.split(":")[1]));

    return currentTime >= currentStart && currentTime <= currentEnd;
  }


  // Função para filtrar os objetos com base no horário
  function filterByTime(objects, startTime, endTime) {
    const newData = [];

    objects.forEach((obj) => {
      if (obj.schedules) {
        const filteredSchedules = obj.schedules.filter((schedule) => {
          if (schedule.hour !== "Fechada") {
            const time = schedule.hour.split(" ")[2]; // Extract the time part
            if (isTimeInRange(time, startTime, endTime)) {
              return true;
            }
          }
          return false;
        });

        // If there are filtered schedules, add the object to newData
        if (filteredSchedules.length > 0) {
          newData.push({ ...obj, schedules: filteredSchedules });
        }
      }
    });

    return newData;
  }


  function onSubmit(event) {
    let newData = data
    if (event.unidades_fechadas === false) {
      newData = data.filter((item) => item.opened === true)
    }

    let result = []

    if (event.periodo === null) result = newData
    if (event.periodo === 'manha') result = filterByTime(newData, "06:00", "12:00");
    if (event.periodo === 'tarde') result = filterByTime(newData, "12:01", "18:00");
    if (event.periodo === 'noite') result = filterByTime(newData, "18:01", "23:00");

    setFilteredData(result)

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] md:w-[65%] mx-auto border-2 rounded border-[#ededed] text-new-light-grey p-6 mb-20'>
      <div className='flex gap-4'>
        <img src={Clock} alt='Relógio' className='w-10' />
        <p className='text-2xl '>Horário</p>
      </div>
      <p className=' text-2xl md:text-4xl mt-8'>Qual período quer treinar?</p>
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

      <div className='w-full flex items-center justify-between mt-16 flex-wrap'>
        <div className='flex gap-3 items-center'>
          <input type="checkbox" {...register("unidades_fechadas")} className='w-5 h-5' />
          <p className='text-2xl'>Exibir unidades fechadas</p>
        </div>
        <p className='text-xl mx-auto mt-6 md:mx-0 md:text-2xl md:mt-0 '>Resultados encontrados: <span className='font-extrabold'>{filteredData.length > 0 ? filteredData?.length : data?.length}</span></p>
      </div>

      <div className='flex justify-center items-center gap-4 mt-10 flex-wrap'>
        <button className='bg-new-yellow text-black font-bold py-4 min-w-[100%] md:min-w-[30%] rounded' type='submit'>ENCONTRAR UNIDADE</button>
        <button className='border-2 border-new-light-grey  text-black font-bold py-4 min-w-[100%] md:min-w-[30%] rounded' type='reset' onClick={() => setValue('periodo', null)}>LIMPAR</button>
      </div>

    </form>
  )
}

export default Form