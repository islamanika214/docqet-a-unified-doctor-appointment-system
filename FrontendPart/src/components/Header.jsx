import { assets } from "../assets/assets"

 {/* mintMist, oliveWhisper, sageGlow, mossyFog */} 

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-mossyFog rounded-lg px-6 md:px-10 lg:px-20">
   

      {/* -----left portion----- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
      
        
        <p className="text-3xl md:text-4xl lg:text-5xl text-goldie font-bold leading-tight md:leading-tight lg:leading-tight">
            Book Your Appointments <br/> With Trusted Doctors 🩺
        </p>
        <h6 className="text-3xl md:text-4xl lg:text-5xl text-yellow-100 font-sembold tracking-tight  leading-tight md:leading-tight lg:leading-tight">Your Health, Our Priority</h6>
        <div className="flex flex-col md:flex-row items-center gap-3 text-stone-900 text-base font-light">
            <img className="w-28" src={assets.group_profiles} alt="" />
            <p>Quick, secure & hassle-free healthcare access from <br className="hidden sm:block"/> the comfort of your home</p>
        </div>
        <a href="#specialist" className="flex items-center gap-2 bg-yellow-100 px-8 py-3 rounded-e-full text-black text-sm font-semibold m-auto md:m-0 hover:scale-105 transition-all duration-300 border-2 border-yellow-300">
            Make an Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>

      </div>
      {/* -----right portion----- */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.docHeader_img} alt="" />
      </div>
    </div>
  )
}

export default Header
