import { FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

import './ProjectCard.css'
import ReactReadMoreReadLess from "react-read-more-read-less";
const ProjectCard = ({ title, des, src, clientGithub, liveLink }) => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 ">
      
            <div className="container">
                <div className="row">
                    <div className="content">
                        <div className="screen">
                            <img src={src} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
                        <div className="flex gap-2">
                            <span role="link" onClick={() => openInNewTab(clientGithub)} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                                <BsGithub />
                            </span>
                            <span role="link" onClick={() => openInNewTab(liveLink)} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                                <FaGlobe />
                            </span>
                        </div>
                    </div>
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify"> 
                        <ReactReadMoreReadLess
                            charLimit={200}
                            readMoreText={"Read more ▼"}
                            readLessText={"Read less ▲"}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                        >
                           {des}
                        </ReactReadMoreReadLess>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;