import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.jpg";
import photo6 from "../images/photo6.jpg";
import photo7 from "../images/photo7.jpg";
import photo8 from "../images/photo8.jpg";
import photo9 from "../images/photo9.jpg";
import photo10 from "../images/photo10.jpg";
import photo11 from "../images/photo11.jpg";
import photo12 from "../images/photo12.jpg";
import photo13 from "../images/photo13.jpg";
import photo14 from "../images/photo14.jpg";
import photo15 from "../images/photo15.jpg";
import photo16 from "../images/photo16.jpg";
import photo17 from "../images/photo17.jpg";
import photo18 from "../images/photo18.jpg";
import photo19 from "../images/photo19.jpg";
import photo20 from "../images/photo20.jpg";
import BackToHome from "../components/BackToHome";

const Picture = () => {
  const picture = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
  ];

  return (
    <div className="absolute grid md:grid-cols-4 top-0 left-0 gap-5 h-full w-full overflow-auto p-5">
      {picture?.map((p, index) => (
        <img
          key={index}
          className="w-[300px] mx-auto h-full object-cover"
          src={p}
          alt={`photo-${index}`}
        />
      ))}
      <BackToHome/>
    </div>
  );
};

export default Picture;
