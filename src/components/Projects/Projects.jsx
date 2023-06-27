import { projectOne, projectTwo, projectThree } from "../../assets";
import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";


const Projects = () => {
    return (
        <section id="projects" className="w-full  py-20  border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title
                    title={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}
                    des="My Projects"
                ></Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectCard
                    title="SOCIAL MEDEA CLONE"
                    des="Lorem20"
                    src={projectOne}
                />
                <ProjectCard
                    title="E-COMMERCE WEBSITE"
                    des="Lorem20"
                    src={projectTwo}

                />
                <ProjectCard
                    title="SOCIAL MEDEA CLONE"
                    des="Lorem20"
                    src={projectThree}
                />
                <ProjectCard
                    title="SOCIAL MEDEA CLONE"
                    des="Lorem20"
                    src={projectOne}
                />
                <ProjectCard
                    title="E-COMMERCE WEBSITE"
                    des="Lorem20"
                    src={projectTwo}
                />
                <ProjectCard

                    title="SOCIAL MEDEA CLONE"
                    des="Lorem20"
                    src={projectThree}
                />

            </div>
        </section>
    );
};

export default Projects;