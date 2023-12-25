import { Link } from "react-router-dom";
import birthday from "../images/birthday.jpg"


const Birthday = () => {
  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%]">
        <Link to={'/menu'}>
      <img src={birthday} className=" mx-auto px-5 my-2 w-[500px] rounded-xl" alt="" />
      <h4 className=" text-pink-300 font-serif text-2xl mt-5 text-center select-none">Happy Birthday, Poe</h4>
      <p className=" text-pink-100 mt-5 select-none text-center">see more</p>
        </Link>
    </div>
  );
}

export default Birthday