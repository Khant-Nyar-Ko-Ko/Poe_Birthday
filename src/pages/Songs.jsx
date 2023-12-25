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
  const playlist = [
    {
      id: 1,
      title: "Christmas Tree",
      singer: "V",
      song: ChristmasTreeMP3,
    },
    {
      id: 2,
      title: "Lovers",
      singer: "Taylor Swift",
      song: LoversMP3,
    },
    {
      id: 3,
      title: "All Too Well",
      singer: "Taylor Swift",
      song: AllTooWell,
    },
    {
      id: 4,
      title: "Photograph",
      singer: "Ed Sheeran",
      song: Photograph,
    },
    {
      id: 5,
      title: "Don't Matter",
      singer: "Lauv",
      song: DontMatter,
    },
    {
      id: 6,
      title: "Paper Ring",
      singer: "Taylor Swift",
      song: PaperRing,
    },
    {
      id: 7,
      title: "I Like Me Better",
      singer: "Lauv",
      song: ILikeMe,
    },
  ];
  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <h2 className=" text-pink-500 text-center text-lg md:text-2xl mb-3 select-none">
        Our PlayList
      </h2>
      <div className="w-96 flex flex-col gap-5 border border-pink-500 shadow px-4 py-2 rounded ">
        {playlist.map((music) => (
          <div className=" flex gap-3" key={music?.id}>
            <p className=" text-sm text-pink-500 w-[200px] border-e pe-1 border-pink-500 select-none">
              {music?.title}
            </p>
            <p className=" text-sm w-[150px] text-pink-500  border-e pe-2 border-pink-500 select-none">
              {music?.singer}
            </p>
            <Audio audioSrc={music?.song} />
          </div>
        ))}
      </div>
     
      <div className=" mt-5">
        <BackToHome />
      </div>
    </div>
  );
};

export default Songs;
