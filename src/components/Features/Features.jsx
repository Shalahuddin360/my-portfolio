import Title from "../Layouts/Title";
import Card from "./Card";
import {  FaGlobe, FaMobile} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { SiAntdesign, SiProgress } from "react-icons/si";
const Features = () => {
    return (
        <section id="features" className="w-full  py-20  border-b-[1px] border-b-black">

        <Title title="Features" des="What I do"></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20" >
          <Card
          title="Business Strategy"
          des="A business strategy is an outline of the actions and decisions a company plans to take to reach its goals and objectives"
         
          />
          <Card
           title="App Development"
           des="A business strategy is an outline of the actions and decisions a company plans to take to reach its goals and objectives"
           icon={<AiFillAppstore/>}
          />
          <Card
           title="SEO Optimization"
           des="A business strategy is an outline of the actions and decisions a company plans to take to reach its goals and objectives"
           
           icon={<SiProgress/>}
          />
          <Card
           title="Mobile Development"
           des="A business strategy is an outline of the actions and decisions a company plans to take to reach its goals and objectives"
         
           icon={<FaMobile/>}
          />
          <Card
           title="UX-Design"
           des="A business strategy is an outline of the actions and decisions a company plans to take to reach its goals and objectives"
           icon={<SiAntdesign/>}
          />
          <Card
           title="Hosting Websites"
           des="A business strategy is an outline of the actions and decisions a company plans to take to reach its goals and objectives"
           icon={<FaGlobe/>}
          />

        </div>
        </section>
    );
};

export default Features;