import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import React, { useState, useRef, useEffect } from "react";
import MusicPlayerHeader from "./MusicPlayerHeader";
import { songsList } from "@/Data/music";

const PlayerBox: React.FC = () => {
   const [currIndex, setCurrIndex] = useState<number>(0);
   const [isPlaying, setIsPlaying] = useState<boolean>(false);
  //  const currSong = useRef<HTMLAudioElement>(new Audio());
   const currSong = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio("") : undefined);
   const songTitle = useRef<HTMLHeadingElement>(null);
   const songArtist = useRef<HTMLHeadingElement>(null);
   const songThumb = useRef<HTMLDivElement>(null);
   const songProgressBar = useRef<SVGCircleElement>(null);
   const volumeSlider = useRef<HTMLInputElement>(null);
   const volumeTrail = useRef<HTMLDivElement>(null);
   useEffect(() => {changeSong()}, []);
  //  const changeSong = () => {
  //    let currentStatus = isPlaying;
  //    if (currentStatus) toggleState();
  //    const song = songsList[currIndex];
  //    if (songTitle.current) songTitle.current.textContent = song.title;
  //    if (songArtist.current) songArtist.current.textContent = song.artist;
  //    if (songThumb.current) songThumb.current.style.backgroundImage = `url(${song.thumb})`;
  //    currSong.current.src = song.link;
  //    if (currentStatus) toggleState();
  //  };
   const toggleState = () => {
     if (isPlaying) {
         currSong.current?.pause();
     } else {
         currSong.current?.play();
     }
     setIsPlaying((prevState) => !prevState);
   };
   const changeSong = () => {
    let currentStatus = isPlaying;
    if (currentStatus) toggleState();
    const song = songsList[currIndex];
    if (songTitle.current) songTitle.current.textContent = song.title;
    if (songArtist.current) songArtist.current.textContent = song.artist;
    if (songThumb.current) songThumb.current.style.backgroundImage = `url(${song.thumb})`;
    if (currSong.current) {
      currSong.current.src = song.link;
    }
    if (currentStatus) toggleState();
  };
    const nextSong = () => {setCurrIndex((prevIndex) => (prevIndex + 1) % songsList.length);changeSong();}
    const prevSong = () => {setCurrIndex((prevIndex) => (prevIndex - 1 + songsList.length) % songsList.length);changeSong();}
 
  
const adjustVolume = (currVol: string | number) => {
  const volume = typeof currVol === "string" ? parseFloat(currVol) : currVol;
  if (currSong.current) {
    currSong.current.volume = volume;
  }
  if (volumeTrail.current) {
    if (volume !== 0) volumeTrail.current.style.width = `${volume * 100 - 2}%`;
    else volumeTrail.current.style.width = "0%";
  }
  if (volumeSlider.current) {
    volumeSlider.current.value = String(volume);
  }
};
useEffect(() => {
  const handleTimeUpdate = () => {
    if (currSong.current) {
      let currPosition = currSong.current.currentTime / currSong.current.duration * 600;
      if (!isNaN(currPosition) && songProgressBar.current) {
        songProgressBar.current.setAttribute("stroke-dasharray", `${currPosition} ${600 - currPosition}`);
      } else if (songProgressBar.current) {
        songProgressBar.current.setAttribute("stroke-dasharray", "0 600");
      }
    }
  };
  if (currSong.current) {
    currSong.current.addEventListener("timeupdate", handleTimeUpdate);
  }
  return () => {
    if (currSong.current) {
      currSong.current.removeEventListener("timeupdate", handleTimeUpdate);
    }
  };
}, []);

  return (
    <div className="player-box">
      <MusicPlayerHeader/>
       <div className="main-wrapper">
        <div className="song-wrapper">
          <div className="song-thumb-wrapper">
            <svg className="song-progress" width="160" height="160" viewBox="0 0 200 200">
              <circle className="song-progress-meter" cx="100" cy="100" r="90" strokeWidth="10" fill="none"></circle>
              <circle className="song-progress-value" cx="100" cy="100" r="90" strokeWidth="10" fill="none" strokeDasharray="217.1732982612064 382.8267017387936" strokeLinecap="round" ref={songProgressBar}></circle>
            </svg>
            <div className="song-thumb" ref={songThumb} style={{ backgroundImage: `url("https:i1.sndcdn.com/artworks-000143888529-4mwefu-t500x500.jpg")` }}/>
          </div>
          <div className="song-info">
            <h2 ref={songTitle} className="song-info-title">Wake Me Up</h2>
            <h6 ref={songArtist} className="song-info-artist">Avicii</h6>
          </div>
        </div>
        <div className="player-wrapper">
          <DynamicFeatherIcon iconName="ArrowLeftCircle" className="player-move-btn" onClick={prevSong} />
          <DynamicFeatherIcon iconName={isPlaying ?"PauseCircle":"PlayCircle"} className="player-state-btn" onClick={toggleState} />
          <DynamicFeatherIcon iconName="ArrowRightCircle" className="player-move-btn" onClick={nextSong} />
        </div>
        <div className="volume-wrapper">
          <DynamicFeatherIcon iconName="Volume1" onClick={() => adjustVolume(0)} />
          <div className="volume-bar">
            <input type="range" name="volume-slider" id="volume-slider" min="0" max="1" step="0.1" defaultValue="0.5" ref={volumeSlider} onChange={(e) => adjustVolume(e.target.value)}/>
            <div ref={volumeTrail}><DynamicFeatherIcon className="volume-trail" iconName="VolumeX" onClick={() => adjustVolume(0)}  /></div>
          </div>
          <i className=" fa-volume-up" onClick={() => adjustVolume(1)}></i>
        </div>
      </div> 
    </div>
  );
};

export default PlayerBox;
