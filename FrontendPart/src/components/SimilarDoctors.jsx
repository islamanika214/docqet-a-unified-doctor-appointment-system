import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DoctorAppContext } from '../context/DoctorAppContexts';


const SimilarDoctors  = ({speciality, docId}) => {


    const {doctorsList} = useContext(DoctorAppContext)
    
    const navigate = useNavigate()

    const [similDoctors, setsimilDoctors] = useState([])

    useEffect(() => {
      console.log("doctorsList from context:", doctorsList);
      console.log("speciality prop:", speciality);
      console.log("docId prop:", docId);
      if(doctorsList.length > 0 && speciality){
        const doctorsDetails = doctorsList.filter((doctor) => doctor.speciality === speciality && doctor._id !== docId)  
        
        console.log("Filtered doctors:", doctorsDetails);

        setsimilDoctors(doctorsDetails)


      }
    }, [doctorsList, speciality, docId])
    console.log(similDoctors);
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>

      <h1 className='text-3xl font-medium'>Also Suggested Doctors</h1>
      <p className='sm:w-1/3 text-center text-sm'>Browse through our list of trusted and experienced specialists. Find the right doctor for your needs and book your appointment with ease!</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>


        {similDoctors.slice(0, 5).map((item, index) => (
          <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index}
            className="min-w-[200px] mx-2 border border-yellow-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-slate-200">
            <img className="bg-blue-50 w-full h-48 object-cover rounded-t-lg" src={item.photo} alt={item.name}/>
            <div className="p-4"> 
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.fullName}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>  
      <button onClick={() => {navigate('/doctors'); scrollTo(0, 0);}} className="mt-4 px-4 py-2 bg-sageGlow text-white rounded-lg">View All Doctors</button>      
    </div>
  )
}

export default SimilarDoctors 


