import BackToHome from "../components/BackToHome";
import myVideo from "../video/HappyBd.mp4";

const Video = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
      <div className="max-w-md mx-auto my-4">
        <h2 className="text-2xl text-center font-semibold text-pink-500 mb-2">
          Recap
        </h2>
        <div className="relative aspect-w-16 aspect-h-5">
          <video className=" border-2 border-pink-500 rounded shadow" controls>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" mt-5">
          <BackToHome />
        </div>
      </div>
    </div>
  );
};

export default Video;
