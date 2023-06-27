

import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {

    return (
        <section id="home" className="w-full flex flex-col lgl:flex-row xl-gap-0 justify-center items-center pt-10 pb-20  border-b-[1px] border-b-black font-titleFont">
            <LeftBanner></LeftBanner>
            
             <RightBanner></RightBanner>
        </section>
    );
};

export default Banner;