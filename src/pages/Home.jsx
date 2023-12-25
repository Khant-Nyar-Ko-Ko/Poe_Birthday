// import Particle from "../components/Particle"

import { Link } from "react-router-dom";


const Home = () => {



  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="  ">
     <Link to={'/birthday'}>
        <div className="loader ms-4">
          <div></div>
        </div>
        <h2 className="text-white cursor-pointer select-none font-sans text-2xl">
          Click here
        </h2>
     </Link>
    
      </div>
    </div>
  );
};

export default Home;
