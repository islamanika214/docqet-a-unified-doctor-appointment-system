import { assets } from "../assets/assets";

/* mintMist, oliveWhisper, sageGlow, mossyFog, deepForest,
            softSunrise, dustyClay, calmSky, warmStone, earthyBrown,
            darkMossyFog, darkSageGlow */
const Contact = () => {
    return (
        <div>
            <div className="text-center text-2xl pt-10 text-mossyFog">
                <p>
                    CONTACT{" "}
                    <span className="text-darkMossyFog font-medium"> US</span>
                </p>
            </div>

            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
                <img
                    className="w-full md:max-w-[360px]"
                    src={assets.contact_image}
                    alt=""
                />

                <div className="flex flex-col justify-center items-start gap-6 text-darkMossyFog">
                    <p className="font-semibold text-lg texy-sageGlow">
                        Our OFFICE
                    </p>
                    <p className="text-mossyFog">
                        34567 Mirpur Road <br />
                        Mohammadpur, Dhaka, Bangladesh
                    </p>
                    <p className="text-mossyFog">
                        Tel: (+880) 0000000000 <br /> Email: ani@gmail.com
                    </p>
                    <p className="font-semibold text-lg texy-sageGlow">
                        Careers at DOCQET
                    </p>
                    <p className="text-mossyFog">
                        Learn more about our theams and job openings.
                    </p>

                    <button className="border border-oliveWhisper px-8 py-4 text-sm hover:bg-darkMossyFog hover:text-white font-light hover:text-lg transition-all duration-500 rounded-full">
                        Explore Jobs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
