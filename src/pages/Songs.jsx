import Audio from "../components/Audio";
import ChristmasTreeMP3 from "../audio/Christmas Tree.mp3";
import LoversMP3 from "../audio/Taylor Swift - Lover.mp3";
import AllTooWell from "../audio/AllTooWell.mp3";
import Photograph from "../audio/Photograph.mp3";
import DontMatter from "../audio/DontMatter.mp3";
import PaperRing from "../audio/PaperRing.mp3";
import ILikeMe from "../audio/ILikeMeBetter.mp3";
import BackToHome from "../components/BackToHome";

const Songs = () => {
  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <h2 className=" text-pink-500 text-center text-lg md:text-2xl mb-3 select-none">
        Our PlayList
      </h2>
      <div className=" w-96 flex flex-col gap-5 border border-pink-500 shadow px-4 py-2 rounded">
        <div className=" flex gap-3">
          <p className=" text-sm text-pink-500 w-[200px] border-e pe-1 border-pink-500 select-none">
            Christmas Tree
          </p>
          <p className=" text-sm w-[150px] text-pink-500  border-e pe-2 border-pink-500 select-none">
            V
          </p>
          <Audio audioSrc={ChristmasTreeMP3} />
        </div>
        <div className=" flex gap-3">
          <p className=" text-sm text-pink-500 w-[200px] border-e pe-1 border-pink-500 select-none">
            Lovers
          </p>
          <p className=" text-sm text-pink-500 w-[150px] border-e pe-2 border-pink-500 select-none">
            Taylor Swift
          </p>
          <Audio audioSrc={LoversMP3} />
        </div>
        <div className=" flex gap-3">
          <p className="text-sm text-pink-500 w-[200px] border-e pe-1 border-pink-500 select-none">
            All Too Well
          </p>
          <p className="text-sm text-pink-500 w-[150px] border-e pe-2 border-pink-500 select-none">
            Taylor Swift
          </p>
          <Audio audioSrc={AllTooWell} />
        </div>
        <div className=" flex gap-3">
          <p className="text-sm text-pink-500 w-[200px] border-e pe-1 border-pink-500 select-none">
            Photograph
          </p>
          <p className="text-sm text-pink-500 w-[150px] border-e pe-2 border-pink-500 select-none">
            Ed Sheeran
          </p>
          <Audio audioSrc={Photograph} />
        </div>
        <div className=" flex gap-3">
          <p className="text-sm text-pink-500 w-[200px] border-e pe-1 border-pink-500 select-none">
            {`Don't Matter`}
          </p>
          <p className="text-sm text-pink-500 w-[150px] border-e pe-2 border-pink-500 select-none">
            Lauv
          </p>
          <Audio audioSrc={DontMatter} />
        </div>
        <div className=" flex gap-3">
          <p className="text-sm text-pink-500 w-[200px] border-e pe-1 border-pink-500 select-none">
            Paper Ring
          </p>
          <p className="text-sm text-pink-500 w-[150px] border-e pe-2 border-pink-500 select-none">
            Taylor Swift
          </p>
          <Audio audioSrc={PaperRing} />
        </div>
        <div className="text-sm flex gap-3">
          <p className=" text-pink-500 w-[200px] border-e pe-1 border-pink-500 select-none">
            {`Don't Matter`}
          </p>
          <p className=" text-pink-500 w-[150px] border-e pe-2 border-pink-500 select-none">
            Lauv
          </p>
          <Audio audioSrc={ILikeMe} />
        </div>
      </div>
      <div className=" mt-5">
      <BackToHome/>
      </div>
        
    </div>
  );
};

export default Songs;
