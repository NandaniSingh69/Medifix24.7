import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const TopDoctors = () => {
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center px-16 gap-4 my-16 text-gray-900 md:mx-10 '>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-6 pt-5 gap-y-6  sm:px-0'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500' key={index}>
                    <img className='bg-blue-50 w-full h-auto' src={item.image} alt="oo"/>
                    <div className='p-4'>
                    <div className="flex items-center gap-2 text-sm text-green-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Available</span>
                         </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-900 text-sm '>{item.speciality}</p>
                </div>
            </div>
            ))}
        </div>
        <button onClick = {()=>{ navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 rounded-full py-2 px-10 text-gray-600 mt-8'>more</button>
    </div>
  )
}

export default TopDoctors