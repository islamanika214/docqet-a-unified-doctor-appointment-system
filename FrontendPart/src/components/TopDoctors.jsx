import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DoctorAppContext } from "../context/DoctorAppContexts";


const TopDoctors = () => {

  const navigate = useNavigate()
  const {doctorsList} = useContext(DoctorAppContext)
  const repeatedDoctorsList = [...doctorsList.slice(0, 10), ...doctorsList.slice(0, 10)];
  


  return (
    <div className="flex flex-col items-center mt-4 gap-4 my-16 text-yellow-700 px-6 md:px-10 lg:px-20 overflow-hidden w-full">
      <h1 className='text-3xl text-green-900 font-bold font-sans mb-4'>Top Specialists Ready to Help</h1>
      <p className="text-medium text-center sm:w-1/3 mx-auto bg-yellow-100 text-orange-950 rounded-2xl shadow-md duration-1000 mb-8 mt-2">Browse through our list of trusted and experienced specialists. Find the right doctor for your needs and book your appointment with ease!</p>

      <div className="w-full overflow-hidden">
        <div className="slider-track">

      
        
          {repeatedDoctorsList.map((item,index)=>(
            <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index}
            className="min-w-[200px] mx-2 border border-yellow-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-slate-200">
                <img src={item.photo} alt="" className="w-full h-52 object-cover object-top rounded-md"/>
                <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-600 ">
                        <p className="w-2 h-2 bg-green-700 rounded-full"></p><p>Available</p>
                        
                    </div>
                    <p className="text-yellow-700 text-lg font-medium">{item.fullName}</p>
                    <p className="text-yellow-600 text-sm">{item.speciality}</p>
                </div>
        
            </div>
          
        ))}
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={()=> {navigate('/doctors'); scrollTo(0,0) }} className="mt-8 bg-slate-50 hover:bg-slate-100 w-36 text-black font-light px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-125">More</button>
        </div>  
      </div>
    </div>
  )
}

export default TopDoctors




// const TopDoctors = () => {
//   return (
//     <div className="flex flex-col items-center gap-4 my-16 text-yellow-700 md:mx-10">
//       <h1 className='text-3xl text-green-900 font-bold font-sans mb-4'>Top Specialists Ready to Help</h1>
//       <p className="text-medium text-center sm:w-1/3 mx-auto bg-yellow-100 text-orange-950 rounded-2xl shadow-md duration-1000 animate-bounce mb-8 mt-6">Browse through our list of trusted and experienced specialists. Find the right doctor for your needs and book your appointment with ease!</p>

//       <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        
//           {doctorsList.slice(0,10).map((item,index)=>(
//             <div key={index}
//             className="border border-yellow-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
//                 <img src={item.photo} alt="" className="w-full h-52 object-cover object-top bg-yellow-50 rounded-md"/>
//                 <div className="p-4">
//                     <div className="flex items-center gap-2 text-sm text-center text-green-600 ">
//                         <p className="w-2 h-2 bg-green-700 rounded-full"></p><p>Available</p>
                        
//                     </div>
//                     <p className="text-yellow-700 text-lg font-medium">{item.fullName}</p>
//                     <p className="text-yellow-600 text-sm">{item.speciality}</p>
//                 </div>
//             </div>
//         ))}
//       </div>
//       <button className="mt-8 bg-green-800 text-white px-4 py-2 rounded-xl hover:bg-green-900 transition-all">More</button>
//     </div>
//   )
// }
