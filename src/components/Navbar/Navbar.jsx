import { useState } from "react";
import { logo } from "../../assets";
import { navLinksData } from "../../constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div className="flex items-center">
                <img className="w-12" src={logo} alt="logo" />
                <h4 className="ml-3  text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">Shala Uddin Mondol</h4>
            </div>
            <div>
      
                <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                    {navLinksData.map(({ _id, title, link }) => (
                        <li
                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                            key={_id}
                        >
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <span onClick={() => setShowMenu(!showMenu)} className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer  lg:hidden lgl:hidden">
                    <FiMenu />
                </span>
                {
                    showMenu && (
                        <div className="w-[80%] h-auto overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                            <div className="flex flex-col gap-2 py-2 relative">
                                <div>
                                    <div className="flex items-center mb-3">
                                        <img className="w-12" src={logo} alt="logo" />
                                        <h4 className="text-sm ml-1 font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">Shala Uddin Mondol</h4>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Earum soluta perspiciatis molestias enim cum repellat, magnam exercitationem distinctio aliquid nam.
                                    </p>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    {
                                        navLinksData.map((item) => (
                                            <li
                                                key={item._id}
                                                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                            >
                                                <Link
                                                    onClick={() => setShowMenu(false)}
                                                    activeClass="active"
                                                    to={item.link}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                                    <div className="flex gap-4">

                                        <span role="link" onClick={() => openInNewTab("https://www.facebook.com/shalauddin.islam.12/")} className="w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                                            <FaFacebookF />
                                        </span>
                                        <span role="link" onClick={()=>openInNewTab("https://twitter.com/Mahmudul144932")} className="w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                                            <FaTwitter />
                                        </span>
                                        <span role="link" onClick={() => openInNewTab("https://www.linkedin.com/in/shalah-uddin-mondol-3b463a1ab/")} className="w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                                            <FaLinkedinIn />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span
                                onClick={() => setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                            >
                                <MdClose />
                            </span>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Navbar;