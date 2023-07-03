import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import ResumeDownload from '../Resume/ResumeDownload';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['JavaScript Developer.', 'MERN Stack Developer.', 'React JS Developer.'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-5">
            <div className="flex flex-col gap-5">

                <h4 className="text-xl lgl:text-3xl font-normal">Welcome to my world !</h4>
                <h1 className="text-3xl lgl:text-6xl font-bold text-white">

                    Hi,I am  {""}
                    <span className="text-designColor capitalize">Shala Uddin</span>

                </h1>
                <h2 className="text-2xl lgl:text-4xl font-bold text-white"> a <span>{text}</span>

                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>

                <p className="text-base p-2 font-bodyFont leading-6 tracking-wide ">
                 I currently develop web application . My core skill is based on JavaScript.I love to make the web more open to the world.I love programming (Curious Programmer) . I have got my Under graduation degree Bachelor of Science B.Sc. (Eng.) in CSE from Asian University of Bangladesh,Dhaka,Bangladesh.I am available for any good opportunities.
                </p>
                
            </div>
      
             <ResumeDownload/>
        
            <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>

                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in

                    </h2>
                    <div className="flex gap-4">
                        <span role="link" onClick={() => openInNewTab("https://www.facebook.com/shalauddin.islam.12/")}  className="bannerIcon" >
                            <FaFacebookF />
                        </span>
                        <span role='link' onClick={()=>openInNewTab("https://twitter.com/Mahmudul144932")} className="bannerIcon">
                            <FaTwitter />
                        </span>
                        <span role="link" onClick={() => openInNewTab("https://www.linkedin.com/in/shalah-uddin-mondol-3b463a1ab/")}  className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </div>

                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiNextdotjs />
                        </span>
                      
                        <span role='link' onClick={()=>openInNewTab("https://github.com/Shalahuddin360")} className="bannerIcon">
                           <FaGithub/>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeftBanner;