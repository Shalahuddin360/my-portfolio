import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:.5}}}  className="w-full flex gap-20">
        <div className="">
            <div className="py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2005 - 2021</p>
                <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            </div>
            <div className="w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" >
                <ResumeCard
                    title="B.Sc. (Engg.) in Computer Science & Eng."
                    subTitle="University of AUB (2018 - 2021)"
                    result="3.90/4"
                    des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."

                />
                <ResumeCard
                    title="AS - Science & Information"
                    subTitle="SuperKing College (2001 - 2005)"
                    result="4.75/5"
                    des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                />
                <ResumeCard
                    title="Secondary School Education"
                    subTitle="Kingstar Secondary School (1998 - 2000)"
                    result="5.00/5"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                />
            </div>
        </div>
        <div className="">
            <div className="py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2021 - 2022</p>
                <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" >
                <ResumeCard
                    title="Sr. Software Engineer"
                    subTitle="Google Out Tech - (2017 - Present)"
                    result="USA"
                    des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                />
                <ResumeCard
                    title="Web Developer & Trainer"
                    subTitle="Apple Developer Team - (2012 - 2016)"
                    result="MALAYSIA"
                    des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
                />
                <ResumeCard
                    title="Front-end Developer"
                    subTitle="Nike - (2020 - 2011)"
                    result="Oman"
                    des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
                />
            </div>
        </div>
    </motion.div>
    );
};

export default Experience;