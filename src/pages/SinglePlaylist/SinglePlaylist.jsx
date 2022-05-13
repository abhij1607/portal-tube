import "./SinglePlaylist.css";
import { PlaylistVideoCard } from "./PlaylistVideoCard/PlaylistVideoCard";

const SinglePlaylist = () => {
  return (
    <div className="single-playlist-layout">
      <PlaylistVideoCard />
    </div>
  );
};

export { SinglePlaylist };
