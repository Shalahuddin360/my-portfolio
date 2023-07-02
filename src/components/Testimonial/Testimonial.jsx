import { testimonialOne, testimonialTwo, quote, testimonialThree } from "../../assets";
import Title from "../Layouts/Title";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        > <HiArrowRight /></div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        > <HiArrowLeft /> </div>
    );
}
const Testimonial = () => {
    const [dotActive, setDotActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: dots => (
            <div
                style={{

                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    marginTop: "20px",
                }}>
                    {""}
                    {dots}{""}

                </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i === dotActive ? {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "#ff014f",
                        borderRadius: "50%",
                        cursor: "pointer",

                    } : {

                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "gray",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }
                }
            >
                {/* {i + 1} */}
            </div>
        ),
    };
    return (
        <section id="testimonial" className="w-full  py-20  border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title
                    title={"What's Clients Say"}
                    des="Testimonial"
                ></Title>
            </div>
            <div className="max-w-6xl mx-auto">
                {/* slider One  */}

                <Slider {...settings}>
                    <div className="w-full" >
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                                <img className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover" src={testimonialOne} alt="testimonialOne" />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                        Bound - Trolola
                                    </p>
                                    <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                       IT Officer
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                                                E-Commerce Website Design.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                via Upwork - Mar 4, 2021 - Aug 30, 2022 test
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                    All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !..
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* slider Two  */}

                    <div className="w-full" >
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                                <img className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover" src={testimonialTwo} alt="testimonialOne" />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                      Canada
                                    </p>
                                    <h3 className="text-2xl font-bold">Dewey Tetzlaff</h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                        System Officer
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                                                Restaurant Management System Design.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                via Fiver - May 4, 2019 - Aug 30, 2020 test
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                    Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated. Att Renan Andrade ..?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* slider Three  */}

                    <div className="w-full" >
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                                <img className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover" src={testimonialThree} alt="testimonialOne" />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                        California , America
                                    </p>
                                    <h3 className="text-2xl font-bold">Amber Laha</h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                        Operation Manager
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                                               Sports Learning Website Design.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                via Freelancer.com - Nov 4, 2021 - Dec 30, 2022 test
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                    Perfect Themes and the best of all that you have many options to choose! Best Support team ever!Very fast responding and experts on their fields! Thank you very much! ..
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;