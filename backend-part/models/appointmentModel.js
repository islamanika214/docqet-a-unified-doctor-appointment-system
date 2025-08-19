import mongoose from "mongoose";
// const { docId } = useParams();
// const { doctorsList, currencySymbol } = useContext(DoctorAppContext);

// const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// const [doctorInfo, setDoctorInfo] = useState(null);
// const [availableDocSlots, setAvailableDocSlots] = useState([]);
// const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);
// const [selectedSlotTime, setSelectedSlotTime] = useState("");

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    docId: { type: String, required: true },
    slotDate: { type: String, required: true },
    selectedSlotTime: { type: String, required: true },
    userData: { type: Object, required: true },
    doctorInfo: { type: Object, required: true },
    amount: { type: Number, required: true },
    date: { type: Number, required: true },
    cancelled: { type: Boolean, default: false },
    payment: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: true },
});

const appointmentModel =
    mongoose.models.appointment ||
    mongoose.model("appointment", appointmentSchema);

export default appointmentModel;
