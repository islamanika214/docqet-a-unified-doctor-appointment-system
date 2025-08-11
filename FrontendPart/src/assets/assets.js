import about_image from "./about_image.png";
import appointment_img from "./appointment_img.png";
import arrow_icon from "./arrow_icon.svg";
import login_background from "./background.jpg";
import Cardiologist from "./Cardiologist.png";
import chats_icon from "./chats_icon.svg";
import contact_image from "./contact_image.png";
import cross_icon from "./cross_icon.png";
import Dermatologist from "./Dermatologist.png";
import doc1 from "./doc1.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import docHeader_img from "./DocHeader.png";
import dropdown_icon from "./dropdown_icon.png";
import General_physician from "./General_Physician.png";
import group_profiles from "./group_profiles.png";
import Gynecologist from "./Gynecologist.png";
import info_icon from "./info_icon.svg";
import logo from "./LOGOO.png";
import menu_icon from "./menu_icon.svg";
import Neurologist from "./Neurologist.png";
import Pediatrician from "./Pediatrician.png";
import profile_pic from "./profile_pic.jpg";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import upload_icon from "./upload_icon.png";
import verified_icon from "./verified_icon.svg";

export const assets = {
    appointment_img,
    docHeader_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    login_background,
};

export const doctorSpecialistsData = [
    {
        specialist: "General Physician",
        imageSrc: General_physician,
    },
    {
        specialist: "Gynecologist",
        imageSrc: Gynecologist,
    },
    {
        specialist: "Dermatologist",
        imageSrc: Dermatologist,
    },
    {
        specialist: "Pediatrician",
        imageSrc: Pediatrician,
    },
    {
        specialist: "Neurologist",
        imageSrc: Neurologist,
    },
    {
        specialist: "Cardiologist",
        imageSrc: Cardiologist,
    },
];

export const doctorsList = [
    {
        _id: "d1",
        fullName: "Dr. Zahra Rahman",
        photo: doc1,
        speciality: "Cardiologist",
        qualification: "MBBS, MD",
        yearsOfService: "7 Years",
        bio: "Dr. Zahra Rahman is a skilled cardiologist with a compassionate heart. She is dedicated to treating cardiovascular diseases with precision and care.",
        consultationFee: 70,
        location: {
            street: "Lakeview Road",
            area: "Dhanmondi, Dhaka",
        },
    },
    {
        _id: "d2",
        fullName: "Dr. Tasmia Anwar",
        photo: doc2,
        speciality: "Dermatologist",
        qualification: "MBBS, DDVL",
        yearsOfService: "5 Years",
        bio: "Dr. Tasmia Anwar is a trusted dermatologist who helps patients achieve healthy and glowing skin. She treats a wide range of skin concerns with empathy and expertise.",
        consultationFee: 60,
        location: {
            street: "Green Street",
            area: "Gulshan, Dhaka",
        },
    },
    {
        _id: "d3",
        fullName: "Dr. Farhan Kabir",
        photo: doc3,
        speciality: "Neurologist",
        qualification: "MBBS, MD",
        yearsOfService: "6 Years",
        bio: "Dr. Farhan Kabir is an experienced neurologist dedicated to diagnosing and treating disorders of the nervous system. He combines scientific knowledge with attentive care.",
        consultationFee: 80,
        location: {
            street: "Sunset Lane",
            area: "Banani, Dhaka",
        },
    },
    {
        _id: "d4",
        fullName: "Dr. Arham Hossain",
        photo: doc4,
        speciality: "Gynecologist",
        qualification: "MBBS, FCPS",
        yearsOfService: "9 Years",
        bio: "Dr. Arham Hossain provides expert gynecological care for women at every stage of life. His warm approach and professionalism make him a trusted name in women’s health.",
        consultationFee: 55,
        location: {
            street: "Maple Avenue",
            area: "Uttara, Dhaka",
        },
    },
    {
        _id: "d5",
        fullName: "Dr. Arwa Chowdhury",
        photo: doc5,
        speciality: "Neurologist",
        qualification: "MBBS, MS",
        yearsOfService: "8 Years",
        bio: "Dr. Arwa Chowdhury is a skilled orthopedic surgeon who specializes in treating bone and joint issues. Her goal is to restore mobility and improve quality of life.",
        consultationFee: 75,
        location: {
            street: "Victory Road",
            area: "Mirpur, Dhaka",
        },
    },
    {
        _id: "d6",
        fullName: "Dr. Jarifa Tasnim ",
        photo: doc6,
        speciality: "Pediatrician",
        qualification: "MBBS, DCH",
        yearsOfService: "4 Years",
        bio: "Dr. Jarifa Tasnim is a gentle pediatrician who cares deeply for children’s health. She provides friendly and effective treatment for little ones.",
        consultationFee: 50,
        location: {
            street: "Rose Garden",
            area: "Mohammadpur, Dhaka",
        },
    },
    {
        _id: "d7",
        fullName: "Dr. Zayaan Islam",
        photo: doc7,
        speciality: "Pediatrician",
        qualification: "MBBS, MS",
        yearsOfService: "5 Years",
        bio: "Dr. Zayaan Islam is an ENT specialist known for treating ear, nose, and throat conditions with precision. He ensures comfort and effective recovery for all his patients.",
        consultationFee: 60,
        location: {
            street: "Palm Street",
            area: "Bashundhara, Dhaka",
        },
    },
    {
        _id: "d8",
        fullName: "Dr. Imran Reza",
        photo: doc8,
        speciality: "Pediatrician",
        qualification: "MBBS, MD",
        yearsOfService: "6 Years",
        bio: "Dr. Imran Reza is a dedicated psychiatrist who supports mental wellness with deep care. He helps patients manage stress, anxiety, and other mental health challenges.",
        consultationFee: 90,
        location: {
            street: "Hope Street",
            area: "Shantinagar, Dhaka",
        },
    },
    {
        _id: "d9",
        fullName: "Dr. Anogh Saeed",
        photo: doc9,
        speciality: "Dermatologist",
        qualification: "MBBS, MS",
        yearsOfService: "7 Years",
        bio: "Dr. Anogh Saeed is a passionate dermatologist who treats skin conditions with modern techniques. He believes in promoting healthy and confident skin.",
        consultationFee: 65,
        location: {
            street: "Lotus Avenue",
            area: "Malibagh, Dhaka",
        },
    },
    {
        _id: "d10",
        fullName: "Dr. Zaraf Islam",
        photo: doc10,
        speciality: "Dermatologist",
        qualification: "BSc, MSc",
        yearsOfService: "3 Years",
        bio: "Dr. Zaraf Islam is a certified nutritionist who helps clients lead healthier lives through personalized meal plans. Her advice is practical, sustainable, and effective.",
        consultationFee: 40,
        location: {
            street: "Pearl Street",
            area: "Rampura, Dhaka",
        },
    },
    {
        _id: "d11",
        fullName: "Dr. Fariha Noor",
        photo: doc11,
        speciality: "General Physician",
        qualification: "MBBS",
        yearsOfService: "4 Years",
        bio: "Dr. Fariha Noor is a general physician known for her efficiency and gentle care. She helps manage day-to-day health concerns with a holistic approach.",
        consultationFee: 50,
        location: {
            street: "Skyline Road",
            area: "Farmgate, Dhaka",
        },
    },
    {
        _id: "d12",
        fullName: "Dr. Siam Khan",
        photo: doc12,
        speciality: "Gynecologist",
        qualification: "MBBS, MD",
        yearsOfService: "6 Years",
        bio: "Dr. Siam Khan is a knowledgeable gynecologist who supports women’s reproductive and hormonal health. He provides clear and respectful consultations.",
        consultationFee: 85,
        location: {
            street: "Crystal Lane",
            area: "Khilgaon, Dhaka",
        },
    },
    {
        _id: "d13",
        fullName: "Dr. Nushrat Anika",
        photo: doc13,
        speciality: "Gynecologist",
        qualification: "MBBS, DM",
        yearsOfService: "10 Years",
        bio: "Dr. Nushrat Anika is a senior oncologist who supports cancer patients with compassion and expertise. She is deeply committed to their recovery journey.",
        consultationFee: 120,
        location: {
            street: "Sunrise Boulevard",
            area: "Baridhara, Dhaka",
        },
    },
    {
        _id: "d14",
        fullName: "Dr. Hasan Zubair",
        photo: doc14,
        speciality: "General Physician",
        qualification: "MBBS, MD",
        yearsOfService: "5 Years",
        bio: "Dr. Hasan Zubair is a pulmonologist who provides expert care for respiratory conditions. He is known for his thorough diagnosis and comforting presence.",
        consultationFee: 70,
        location: {
            street: "Breeze Avenue",
            area: "Tejgaon, Dhaka",
        },
    },
    {
        _id: "d15",
        fullName: "Dr. Jarin Hossain",
        photo: doc15,
        speciality: "Neurologist",
        qualification: "BDS, MDS",
        yearsOfService: "3 Years",
        bio: "Dr. Jarin Hossain is a friendly and skilled dentist who ensures a comfortable dental experience. She focuses on preventive care and gentle treatments.",
        consultationFee: 45,
        location: {
            street: "Smile Street",
            area: "Kalabagan, Dhaka",
        },
    },
];
