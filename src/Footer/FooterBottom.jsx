import { FiArrowUp} from "react-icons/fi";
import ScrollToTop from "react-scroll-to-top";
const FooterBottom = () => {
  return (
    <div className="w-full py-10">
        <div className="rounded-lg">
        <ScrollToTop smooth component={<p style={{ color: "blue",fontSize:"40px"}}><FiArrowUp/></p>} />
        </div>
  
      <p className="text-center text-gray-500 text-base">
        © 2023. All rights reserved by Shalah Uddin Mondol
      </p>
    </div>
  );
};

export default FooterBottom;