import "./WatchVideoCard.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
// import { useData } from "../../../context/data-context";
import { useAuth } from "../../../context/auth-context";
import { PlaylistModal } from "../../../components/PlaylistModal/PlaylistModal";

import {
  fetchVideo,
  requestAddVideoInWatchLater,
  requestDeleteVideoInWatchLater,
} from "../../../utils/server-request";
import { getNumberInFormat } from "../../../utils/number-format";

const WatchVideoCard = () => {
  const [video, setVideo] = useState({});
  const [isAddToPlaylistActive, setIsAddToPlaylistActive] = useState(false);
  const { watchid } = useParams();
  const navigate = useNavigate();

  // const {
  //   dataState: { videos },
  // } = useData();

  const {
    userState: {
      userToken,
      userDetails: { watchlater },
    },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  useEffect(() => {
    (async () => {
      const currentVideo = await fetchVideo(watchid);
      setVideo(currentVideo);
    })();
  }, []);

  const handleAddToWatchLater = () => {
    if (!userToken) {
      navigate("/login");
    }
    requestAddVideoInWatchLater(video, headers, userDispatch);
  };

  const handleDeleteVideoInWatchLater = () => {
    requestDeleteVideoInWatchLater(video._id, headers, userDispatch);
  };

  const handleAddToPlaylist = (e) => {
    e.stopPropagation();
    if (!userToken) {
      navigate("/login");
    }
    setIsAddToPlaylistActive(true);
  };

  console.log(video);
  return (
    <div className="card-container watch-video-card">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${watchid}`}
          controls={true}
          playing={true}
          width="100%"
          height="100%"
        />
      </div>
      <div className="card-info">
        <h1 className="card-title video-title">{video.title}</h1>
      </div>
      <div className="card-action">
        <span className="alight-left">
          {getNumberInFormat(video.views)} views
        </span>
        <div className="align-right flex-row gap-2">
          <button className="action-icon btn">
            <AiOutlineLike />
            Like
          </button>

          {watchlater.some((item) => item._id === video._id) ? (
            <button
              className="action-icon btn"
              onClick={handleDeleteVideoInWatchLater}
            >
              <MdWatchLater /> Remove Watch Later
            </button>
          ) : (
            <button className="action-icon btn" onClick={handleAddToWatchLater}>
              <MdOutlineWatchLater /> Watch Later
            </button>
          )}

          <button className="action-icon btn" onClick={handleAddToPlaylist}>
            <RiPlayListAddFill /> Add To Playlist
          </button>
        </div>
      </div>
      <div className="card-body pd-y-base">
        <div className="flex-row gap-2 item-center">
          <img
            width="35"
            height="35"
            className="img-responsive img-round"
            src={video.channelThumbnail}
            alt={video.channelName}
          />
          <span>{video.channelName}</span>
        </div>
        <p className="description">{video.description}</p>
      </div>
      {isAddToPlaylistActive && (
        <PlaylistModal
          video={video}
          setIsAddToPlaylistActive={setIsAddToPlaylistActive}
        />
      )}
    </div>
  );
};
export { WatchVideoCard };
