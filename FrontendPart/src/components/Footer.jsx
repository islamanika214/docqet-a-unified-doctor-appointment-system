import { assets } from "../assets/assets"

{/* mintMist, oliveWhisper, sageGlow, mossyFog */} 
const Footer = () => {
  return (
    <div className="bg-mintMist text-gray-800 pt-10 pb-6 px-6 md:px-20 mt-16 rounded-t-3xl shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-center md:text-left">


            {/* -----left portion----- */}
            <div className="basis-1/3 max-w-[320px]">
                <img src={assets.logo} alt="DOCQET Logo" className="max-w-[150px] h-[110px] cursor-pointer relative-top-2 mt-0 mx-auto md:mx-0" />
                <p  className="text-sm text-gray-600 mt-2">Thank you for visiting! We’re dedicated to connecting you with trusted healthcare specialists to make your journey easier and healthier. If you have any questions, don’t hesitate to contact us.</p>

            </div>


            {/* -----Center portion----- */}
            <div className="basis-1/3 max-w-[320px]">
                <p className="text-lg font-semibold text-green-800 mb-2">COMPANY</p>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li className="hover:text-green-600 cursor-pointer">Home</li>
                    <li className="hover:text-green-600 cursor-pointer">About Us</li>
                    <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
                    <li className="hover:text-green-600 cursor-pointer">Privacy Policy</li>
                </ul>
                

            </div>


            {/* -----Right portion----- */}
            <div className="basis-1/3 max-w-[320px]">
                <p className="text-lg font-semibold text-green-800 mb-2">GET IN TOUCH</p>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>📞 +0000000000</li>
                    <li>📧 ani@gmail.com</li>
                </ul>

            </div>


        </div>
        
        {/* -----Copyright portion----- */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-500">
            <p>© 2025@ Docqet -All Right Reserved</p>
        </div>

      
    </div>
  )
}

export default Footer
