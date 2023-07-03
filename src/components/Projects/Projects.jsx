import {projectOne, projectTwo, projectThree } from "../../assets";
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
                    title="Sports Learning School"
                    des="It is a sports learning website, Which offers classes of various categories of sports.Student can easily can sign up and log in to this website using google and email or password .Student can select classes then  see their enrolled class  list  after completing the payment.Basically  Admin manage users , all classes of the Instructors and make new admin Instructors.•	If anyone want to be the instructor he firstly needs the permission admin from the admin after the permission he can upload it is own classes and then monitoring it."
                    src={projectOne}
                    clientGithub="https://github.com/Shalahuddin360/super-sports-summer-camp-client"
                    serverSide="https://github.com/Shalahuddin360/super-sports-summer-camp-server"
                    liveLink="https://super-sport-feec1.web.app/"
                />
                <ProjectCard
                    title="Toy Town Marketplace"
                    des="It is a  toys related website and here you can find different types of toys. User can log into this website using Google or an email password. A user can see the toys and choose toy.Here a seller can sell their toys also add toys to update toys and delete toys.A CRUD application exposed using a REST API made with Node.js ,server host in Vercel."
                    src={projectTwo}
                    clientGithub="https://github.com/Shalahuddin360/toy-town-marketplace-client"
                    serverSide="https://github.com/Shalahuddin360/toy-town-marketplace-server"
                    liveLink="https://toy-town-2d792.web.app/"
                />
                <ProjectCard
                    title="FoodHub Service"
                    des="It is an food fruits selling website. This website will help you to manage fruit inventory.Users can sign up and log in to this website using Google,email and password. You can easily edit your fruits."
                    src={projectThree}
                    clientGithub="https://github.com/Shalahuddin360/foodhub-client"
                    serverSide="https://github.com/Shalahuddin360/foodhub-server"
                    liveLink="https://the-foodhub-with-firebase.web.app/"
                />
                {/* <ProjectCard
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
                /> */}

            </div>
        </section>
    );
};

export default Projects;