import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const AppBanner = () => {
    const navigate = useNavigate()
 {/* mintMist, oliveWhisper, sageGlow, mossyFog */} 
  
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-oliveWhisper rounded-lg px6 md:px-10 lg:px-20">
        
      {/* -----left portion----- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-3xl md:text-4xl lg:text-5xl text-green-900 font-semibold leading-tight md:leading-tight lg:leading-tight">
            <p >Book Appointment Now</p>
            <p className="mt-4 mb-6">With 100+ Trusted Doctors</p>
        </div>
        <button onClick={() => {navigate('login'); scrollTo(0,0)}} className="flex items-center gap-2 bg-slate-200 px-8 py-3 mt-8 rounded-full text-black text-sm sm:text-base font-semibold m-auto md:m-0 hover:scale-105 transition-all duration-300 border-2 border-yellow-300">Create account</button>

      </div>

      {/* -----Right portion----- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img className="w-full absolute bottom-0 right-0 max-w-md" src={assets.appointment_img} alt="" />

      </div>
    </div>
  )
}

export default AppBanner
