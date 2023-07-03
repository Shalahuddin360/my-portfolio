import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
            {/* part one  */}
            <div className="">
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2005 - 2021</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" >
                    <ResumeCard
                        title="As a Fresher Jr. Web Developer"
                        subTitle=""
                        result=""
                        des=""
                    />
                    <ResumeCard
                        title="As a Fresher Jr. Web Developer"
                        subTitle=""
                        result=""
                        des=""
                    />
                    <ResumeCard
                        title="As a Fresher Jr. Web Developer"
                        subTitle=""
                        result=""
                        des=""
                    />
                </div>
            </div>
            {/* part two  */}
            <div className="">
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2021 - 2022</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" >
                    <ResumeCard
                        title="As a Fresher Jr. Web Developer"
                        subTitle=""
                        result=""
                        des=""
                    />
                    <ResumeCard
                        title="As a Fresher Jr. Web Developer"
                        subTitle=""
                        result=""
                        des=""
                    />
                    <ResumeCard
                        title="As a Fresher Jr. Web Developer"
                        subTitle=""
                        result=""
                        des=""
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;