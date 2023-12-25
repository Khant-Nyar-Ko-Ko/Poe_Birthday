import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Menu from "./pages/Menu";
import Picture from "./pages/Picture";
import Video from "./pages/Video";
import Songs from "./pages/Songs";
import Letter from "./pages/Letter";
import Birthday from "./pages/Birthday";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday/>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/picture" element={<Picture />} />
        <Route path="/video" element={<Video />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </>
  );
}

export default App