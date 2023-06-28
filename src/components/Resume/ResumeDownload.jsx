
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return (
   
        <section className="w-full  py-10">
            <div className="flex flex-col lgl:flex-row justify-center items-center text-center gap-4">

                <button className="w-48 h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent" role="link" onClick={() => openInNewTab("https://drive.google.com/file/d/1tQgCzXgkRuaT81N4FX9nN3S2OEsjGUIR/view?usp=drive_link")}>Show Resume</button>
                
                <a
                    href='/public/resume_of_shalahuddin.pdf'
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button
                        className="bg-gradient-to-r from-[#49177e] to-green-600 text- hover:to-orange-500 flex justify-center items-center gap-1 font-titleFont rounded-md px-4 py-2 ml-2 focus:outline-none hover:bg-gray-600">Download Resume <span className="lgl:text-2xl"><FaDownload /></span></button>
                </a>
            </div>
        </section>
    );
};

export default ResumeDownload;