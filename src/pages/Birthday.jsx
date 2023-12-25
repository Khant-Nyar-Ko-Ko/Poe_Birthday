import { Link } from "react-router-dom";
import birthday from "../images/birthday.jpg"


const Birthday = () => {
  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
        <Link to={'/menu'}>
      <img src={birthday} className=" rounded" alt="" />
      <h4 className=" text-pink-300 font-serif text-2xl mt-5 text-center select-none">Happy Birthday, Poe</h4>
      <p className=" text-slate-50 mt-10 select-none">see more</p>
        </Link>
    </div>
  );
}

export default Birthday