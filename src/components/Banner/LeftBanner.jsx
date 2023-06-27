import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Professional Coder.', 'MERN Stack Developer.', 'UI Designer.'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className="w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">

                <h4 className="text-3xl font-normal">Welcome to my Portfolio !</h4>
                <h1 className="text-6xl font-bold text-white">

                    Hi,I am  {""}
                    <span className="text-designColor capitalize">Shala Uddin</span>

                </h1>
                <h2 className="text-4xl font-bold text-white"> a <span>{text}</span>

                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid perferendis eius cupiditate repellendus aperiam quasi asperiores iste, culpa laboriosam similique? Consectetur cum commodi illo culpa! Beatae eveniet temporibus tenetur exercitationem?

                </p>

            </div>
            <div className='flex justify-between'>

                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in

                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaFacebookF />
                        </span>
                        <span className="bannerIcon">
                            <FaTwitter />
                        </span>
                        <span className="bannerIcon">
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
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeftBanner;