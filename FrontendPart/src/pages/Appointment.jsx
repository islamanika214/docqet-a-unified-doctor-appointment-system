import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { assets } from "../assets/assets"
import SimilarDoctors from "../components/SimilarDoctors"
import { DoctorAppContext } from "../context/DoctorAppContexts"


const Appointment = () => {

  const {docId} = useParams()
  const {doctorsList, currencySymbol} =  useContext(DoctorAppContext)

  const weekDays = ['SUN' , 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [doctorInfo , setDoctorInfo] = useState(null)
  const [availableDocSlots, setAvailableDocSlots] = useState([])
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(0)
  const [selectedSlotTime, setSelectedSlotTime] = useState('')


  const fetchDoctorInfo = async () => {
    const doctorInfo = doctorsList.find(doctor => doctor._id === docId)
    setDoctorInfo(doctorInfo)
  }

  const getAvailableSlots = async () => {
    setAvailableDocSlots([])

    //current date 
    let today = new Date()

    for (let i = 0 ; i < 7; i++){

      //date with index
      let currentDate = new Date(today)

      currentDate.setDate(today.getDate()+i)

      //setting end time of a date with index

      let endTime = new Date()
      endTime.setDate(today.getDate()+ i)
      endTime.setHours(21,0,0,0)

      //setting a day hours

      if (today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()> 10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime){
        let timeFormat = currentDate.toLocaleTimeString([], {hour: '2-digit' , minute: '2-digit'})

        //add slots to the timeSlots array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: timeFormat
        })

        // Increment current time of time slot by 15 minutes
        currentDate.setMinutes(currentDate.getMinutes()+ 15)
      }

      setAvailableDocSlots(prev => ([...prev, timeSlots]))

    }

  }



  useEffect(() => {
    fetchDoctorInfo()
  }, [doctorsList, docId])


  useEffect(() => {
    getAvailableSlots()
  }, [doctorInfo])

  useEffect(() => {
    console.log(availableDocSlots)
  }, [availableDocSlots])


  return doctorInfo && (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* ----doctor's image---- */}
        <div>
          <img className="bg-sageGlow w-full sm:max-w-72 rounded-lg" src={doctorInfo.photo} alt="" />

        </div>

        {/* ----doctor's info---- */}
        <div className="flex-1 border border-oliveWhisper rounded-lg p-8 py-7 bg-mossyFog mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-white">
            {doctorInfo.fullName}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-oliveWhisper">
            <p>{doctorInfo.qualification} - {doctorInfo.speciality}</p>
            <p className="py-0.5 px-2 border border-mintMist text-xs rounded-full cursor-pointer">{doctorInfo.yearsOfService}</p>
          </div>
{/* mintMist, oliveWhisper, sageGlow, mossyFog */} 
          {/* ----doctor's info---- */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-mintMist">About <img src={assets.info_icon} alt="" /></p>
            <p className="text-sm text-slate-100 max-w-[700px] mt-1">{doctorInfo.bio}</p>
          </div>
          <div>
            <p className="text-slate-200 font-medium mt-4">
              Appointment fee: <span className="text-slate-50">{currencySymbol}{doctorInfo.consultationFee}</span>
            </p>
          </div>

        </div>

      </div>  

        {/* ---- Appointment slots---- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-black">
          <p>Pick Your Slot</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {
              availableDocSlots.length && availableDocSlots.map((item, index) => (
                <div onClick={() => setSelectedSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${selectedSlotIndex === index ? 'bg-sageGlow text-black' : 'border border-gray-50' }`} key={index}>
                  <p>{item[0] && weekDays[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>

                </div>
                
              ))
              
            }
          </div>


          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {availableDocSlots.length && availableDocSlots[selectedSlotIndex].map((item, index) => (
              <p onClick={() => setSelectedSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === selectedSlotTime? 'bg-sageGlow text-white' : 'text-gray-400 border border-gray-300'}`} key = {index}>
                {item.time.toLowerCase()}
              </p>
            ))}


          </div>

          <button className="bg-sageGlow text-gray-50 text-sm font-light px-14 py-3 rounded-full my-6">Book an Appointment Now</button>

        </div>

        {/* Listing similar doctors */}
        <SimilarDoctors docId={docId} speciality={doctorInfo.speciality}/> 
      
      
    </div>
  )
}

export default Appointment


  // const [doctorInfo , setDoctorInfo] = useState(null)
  // const [availableDocSlots, setAvailableDocSlots] = useState([])
  // const [selectedSlotIndex, setSelectedSlotIndex] = useState(0)
  // const [selectedSlotTime, setSelectedSlotTime] = useState('')