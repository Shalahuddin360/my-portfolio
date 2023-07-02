import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"

const Education = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:.5}}} className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
            {/* part one  */}
        <div className="">
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2005 - 2022</p>
                <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" >
                <ResumeCard 
                    title="B.Sc. (Engg.) in Computer Science & Eng."
                    subTitle="Asian University Of Bangladesh ,Dhaka (Jan 2018 - May 2022)"
                    result="3.36/4"
                    des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."

                />
                <ResumeCard
                    title="Higher Secondary School Certificate"
                    subTitle="Parbatipur  Adarsha Degree College ,Dinajpur (2016 - 2017)"
                    result="3.25/5"
                    des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                />
                <ResumeCard
                    title="Secondary School Certificate "
                    subTitle="Haldibari Maddhamik Bidhya Niketon,Dinajpur (2013 - 2015)"
                    result="4.61/5"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                />
            </div>
        </div>
         {/* part two  */}
        <div className="">
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2020 - 2022</p>
                <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            </div>
            <div className=" mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" >
                <ResumeCard
                    title="As A fresher Jr. Web Developer"
                    subTitle="--"
                    result="Bangladesh"
                    des="I am willing to join your IT team as a fresher. Do you want to join me as junior web developer."
                />
                <ResumeCard
                    title="Front-end Developer"
                    subTitle="AUB Programming  Team -(Dec 2021  - May 2022)"
                    result="Bangladesh"
                    des="I was responsible for'client-side'development of web applications. I have always been able to translate  customer needs into functional applications."
                />
                <ResumeCard
                    title="Jr. Front-end Developer"
                    subTitle="AUB Programming Team- (Dec 2020 - Nov 2021)"
                    result="Bangladesh"
                    des="I worked with a professor and project team for our university final project.  I was able to create a user-friendly environment by writing code."
                />
            </div>
        </div>
        </motion.div>
    );
};

export default Education;