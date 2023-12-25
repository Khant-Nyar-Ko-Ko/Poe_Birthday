import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <ul className=" text-white flex flex-col sm:flex-row gap-5  select-none cursor-pointer  ">
        <Link to={'/picture'}>
        <li className="text-2xl  hover:text-pink-500 duration-300 ease-in-out transition-all">
          Picture
        </li>
        </Link>
        <Link to={'/video'}>
        <li className="text-2xl  hover:text-pink-500 duration-300 ease-in-out transition-all">Video</li>
        </Link>
        <Link to={'/songs'}>
        <li className="text-2xl  hover:text-pink-500 duration-300 ease-in-out transition-all">Songs</li>
        </Link>
        <Link to={'/letter'}>
        <li className="text-2xl  hover:text-pink-500 duration-300 ease-in-out transition-all">Letter</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu