import { logo } from "../../assets";
import { navLinksData } from "../../constants";
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div className="flex items-center">
                <img className="w-12" src={logo} alt="logo" />
                 <h4 className="ml-3  text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">Shala Uddin Mondol</h4>
            </div>
            <div>
                {/* <ul className="flex items-center gap-10">
                    {
                        navLinksData.map(navLinks => <p
                            key={navLinks._id}
                        >
                            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">

                                <Link activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>{navLinks.title}</Link>

                            </li>

                        </p>)
                    }
                </ul> */}
                <ul className="flex items-center gap-10">
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
            </div>
        </div>
    );
};

export default Navbar;