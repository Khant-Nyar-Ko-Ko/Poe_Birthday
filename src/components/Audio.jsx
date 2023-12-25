/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { FaPause, FaPlay, FaStopCircle } from "react-icons/fa";

const Audio = ({ audioSrc, onEnded, onPlay, onStop }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Set the audio source when the component mounts
    audioRef.current.src = audioSrc;
  }, [audioSrc]);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
    onPlay(); // Notify the parent component that this song is playing
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    onStop(); // Notify the parent component that this song is stopped
  };

  return (
    <div>
      <audio ref={audioRef} onEnded={onEnded} style={{ display: "none" }}>
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex gap-1">
        <button
          className="text-pink-500 px-2 py-1 rounded"
          onClick={isPlaying ? pauseAudio : playAudio}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="text-pink-500 px-2 py-1 rounded" onClick={stopAudio}>
          <FaStopCircle />
        </button>
      </div>
    </div>
  );
};

export default Audio;
