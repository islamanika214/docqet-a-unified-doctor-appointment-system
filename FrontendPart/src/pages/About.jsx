import { assets } from "../assets/assets";

/* mintMist, oliveWhisper, sageGlow, mossyFog, deepForest, softSunrise, dustyClay, calmSky,  warmStone, earthyBrown, darkMossyFog, darkSageGlow */

//import React from 'react'
const About = () => {
    return (
        <div>
            <div className="text-center text-2xl pt-10 text-mossyFog">
                <p>
                    ABOUT{" "}
                    <span className="text-darkMossyFog font-medium">US</span>
                </p>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-12">
                <img
                    className="w-full md:max-w-[360px]"
                    src={assets.about_image}
                    alt=""
                />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-deepForest font-light">
                    <p className="text-darkSageGlow text-base">
                        {" "}
                        Docqet is an easy and reliable online doctor appointment
                        system connecting patients with trusted healthcare
                        professionals. We help you find the right specialist
                        quickly and book appointments with just a few clicks.
                        Our platform ensures secure, smooth, and convenient
                        access to quality healthcare from anywhere.
                    </p>
                    <p className="text-darkSageGlow text-base italic font-serif">
                        <strong className="text-darkMossyFog font-serif">
                            Our Vision
                        </strong>{" "}
                        is to prioritize patient satisfaction and trusted care
                        by making healthcare simple, accessible, and stress-free
                        for everyone.
                    </p>
                </div>
            </div>

            <div className="text-xl my-4 text-mossyFog">
                <p>
                    WHY{" "}
                    <span className="text-darkSageGlow font-semibold">
                        CHOOSE US
                    </span>
                </p>
            </div>

            <div className="flex flex-col md:flex-row mb-20">
                <div className="border bg-slate-50 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-oliveWhisper hover:text-deepForest transition-all duration-300 text-mossyFog cursor-pointer">
                    <b>Verified Doctors:</b>
                    <p>
                        Access profiles of qualified and experienced
                        specialists.
                    </p>
                </div>

                <div className="border bg-slate-50 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-oliveWhisper hover:text-deepForest transition-all duration-300 text-mossyFog cursor-pointer">
                    <b>Quick Booking:</b>
                    <p>Schedule appointments instantly anytime, anywhere.</p>
                </div>

                <div className="border bg-slate-50 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-oliveWhisper hover:text-deepForest transition-all duration-300 text-mossyFog cursor-pointer">
                    <b>Specialty Search:</b>
                    <p>Find doctors based on your specific health needs.</p>
                </div>
                <div className="border bg-slate-50 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-oliveWhisper hover:text-deepForest transition-all duration-300 text-mossyFog cursor-pointer">
                    <b>Secure & Transparent:</b>
                    <p>Your privacy and safety are our top priority.</p>
                </div>
                <div className="border bg-slate-50 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-oliveWhisper hover:text-deepForest transition-all duration-300 text-mossyFog cursor-pointer">
                    <b>Convenience:</b>
                    <p>Healthcare made simple and accessible.</p>
                </div>
            </div>
        </div>
    );
};

export default About;

{
    /* <h3 className="text-md font-medium text-deepForest mt-6 mb-0">Our Key Features</h3>

          <ul className="list-disc list-inside text-darkMossyFog space-y-2 font-light">
            <li><b className="text-deepForest">Verified Doctors:</b> Access profiles of qualified and experienced specialists.</li>
            <li><b className="text-deepForest">Quick Booking:</b> Schedule appointments instantly anytime, anywhere.</li>
            <li><b className="text-deepForest">Specialty Search:</b> Find doctors based on your specific health needs.</li>
            <li><b className="text-deepForest">Secure & Transparent:</b> Your privacy is our top priority.</li>
            <li><b className="text-deepForest">Convenience:</b> Healthcare made simple and accessible.</li> */
}
