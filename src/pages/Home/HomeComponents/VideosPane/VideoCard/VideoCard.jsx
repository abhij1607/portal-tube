import { getNumberInFormat } from "../../../../../utils/number-format";
import "./VideoCard.css";
import { useState } from "react";
import { useAuth } from "../../../../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { PlaylistModal } from "../../../../../components/PlaylistModal/PlaylistModal";

const VideoCard = ({ video }) => {
  const [isVideoOptionsActive, setIsVideoOptionsActive] = useState(false);
  const [isAddToPlaylistActive, setIsAddToPlaylistActive] = useState(false);
  const {
    userState: { userToken },
  } = useAuth();

  const navigate = useNavigate();

  const toggleVideoOption = () => {
    setIsVideoOptionsActive((previous) => !previous);
  };

  const handleAddToPlaylist = () => {
    if (!userToken) navigate("/login");
    setIsAddToPlaylistActive(true);
    setIsVideoOptionsActive(false);
  };

  return (
    <>
      <div className="card-container">
        <img
          className="card-img-top"
          src={video.videoThumbnail}
          alt={video.title}
          width="280"
        />
        <div className="card-info flex-row gap-1">
          <div>
            <h3 className="card-title">{video.title}</h3>
            <p className="card-author">{video.channelName}</p>
            <div className="card-author flex-row gap-1">
              <span>{getNumberInFormat(video.views)} views</span>
              <span>{getNumberInFormat(video.likes)} likes</span>
            </div>
          </div>
          <button
            className="align-right pd-x-xsm btn btn-circle-bg"
            onClick={toggleVideoOption}
          >
            <i className="fas fa-ellipsis-v" />
          </button>

          {isVideoOptionsActive && (
            <ul className="additional-options box-shadow pd-y-sm">
              <li className="pd-x-base pd-y-xs">Add to watch later</li>
              <li className="pd-x-base pd-y-xs" onClick={handleAddToPlaylist}>
                Add to playlist
              </li>
            </ul>
          )}
        </div>
      </div>
      {isAddToPlaylistActive && (
        <PlaylistModal
          video={video}
          setIsAddToPlaylistActive={setIsAddToPlaylistActive}
        />
      )}
    </>
  );
};
export { VideoCard };
