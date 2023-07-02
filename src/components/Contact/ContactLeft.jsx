
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { contactImg } from "../../assets";
const ContactLeft = () => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div className="w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <img className="w-full h-64 object-cover rounded-lg mb-2" src={contactImg} alt="contactImg" />
            <div className="flex flex-col gap-4 ">
                <h3 className="text-3xl font-bold  hover:text-designColor duration-300">Shalah Uddin Mondol</h3>
                <p className="text-2xl font-semibold  tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify">
                    MERN Stack Developer
                </p>
                <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify">
                    As a web developer , my goal is to build effective ,visually stunning and intuitive web application  that enhance user experience and drive business success . I am eager to expand my skills and explore new technologies to bring innovative ideas to life
                </p>
                <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify flex items-center gap-2">
                    Phone: <span className="text-lightText">+8801746-967028</span>
                </p>
                <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify flex items-center gap-2">
                    Email: <span className="text-lightText">salauddincse011@gmail.com</span>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                    <span role="link" onClick={() => openInNewTab("https://www.facebook.com/shalauddin.islam.12/")} className="bannerIcon" >
                        <FaFacebookF />
                    </span>
                    <span role='link' onClick={() => openInNewTab("https://twitter.com/Mahmudul144932")} className="bannerIcon">
                        <FaTwitter />
                    </span>
                    <span role="link" onClick={() => openInNewTab("https://www.linkedin.com/in/shalah-uddin-mondol-3b463a1ab/")} className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;