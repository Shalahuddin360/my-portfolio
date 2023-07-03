import Title from "../Layouts/Title";
import Card from "./Card";

import { AiFillAppstore } from "react-icons/ai";
import { SiAntdesign} from "react-icons/si";
const Features = () => {
    return (
        <section id="features" className="w-full  py-20  border-b-[1px] border-b-black">

        <Title title="Features" des="What I do"></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20" >
          <Card
          title="Business Strategy"
          des="A business strategy is an outline of the actions and decisions a company plans to take to reach its goals and objectives"
         
          />
          <Card
           title="App Development"
           des="Mobile application development is the process of creating software applications that run on a mobile device."
           icon={<AiFillAppstore/>}
          />
 
          <Card
           title="UI-Design"
           des="User experience (UX) design is the process and practice used to design and implement a product that will provide positive and relevant interactions with users."
           icon={<SiAntdesign/>}
          />
      

        </div>
        </section>
    );
};

export default Features;