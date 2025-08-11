import { Link } from 'react-router-dom'
import { doctorSpecialistsData } from '../assets/assets'
const SpecialistsList = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='#specialist'>
      <h1 className='text-3xl text-green-900 font-bold font-sans'>FIND BY SPECIALITY</h1>
      <p className="text-medium text-center sm:w-1/3  bg-yellow-100 text-orange-950 rounded-2xl shadow-md duration-1000 animate-bounce">Not sure who to visit? Pick the right specialist for your health needs </p>
      
        <div className="flex flex-wrap justify-center gap-0">    
          {doctorSpecialistsData.map((item, index) => (
            <Link onClick={() => scrollTo(0,0)} key={index} to={`/doctors/${item.specialist}`}
            className="flex flex-col items-center text-center text-xs cursor-pointer flex-shrink-0  transition-transform hover:translate-y-2 duration-500">
              <p className="px-4 py-1 mb-2 bg-slate-50 text-green-900 rounded-full font-medium text-sm shadow-sm mt-4"> {item.specialist}</p>
              <img src={item.imageSrc} alt="" className="w-72 h-72 
              sm:w-40 mb-0 object-cover rounded-lg block leading-none"/>
              

{/* mt-0 font-light text-xl */}

            </Link>
        ))}
        </div>

      </div>
      
      
    // </div>
  )
}

export default SpecialistsList
