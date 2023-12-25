import { IoReturnUpBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div>
      <Link to={"/menu"}>
        <button className=" text-pink-500 flex gap-2 text-lg">
          <IoReturnUpBackOutline />
          <p>Back To Home</p>
        </button>
      </Link>
    </div>
  );
};

export default BackToHome;
