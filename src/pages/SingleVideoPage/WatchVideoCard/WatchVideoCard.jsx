import "./WatchVideoCard.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
// import { useData } from "../../../context/data-context";
import { fetchVideo } from "../../../utils/server-request";
import { getNumberInFormat } from "../../../utils/number-format";

const WatchVideoCard = () => {
  const [video, setVideo] = useState({});
  const { watchid } = useParams();

  // const {
  //   dataState: { videos },
  // } = useData();

  useEffect(() => {
    (async () => {
      const currentVideo = await fetchVideo(watchid);
      setVideo(currentVideo);
    })();
  }, []);

  // const video = videos.find((video) => video._id === watchid);
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
          <button className="action-icon">
            <i className="fa fa-heart" /> Like
          </button>
          <button className="action-icon">
            <i className="fa fa-share-alt" aria-hidden="true" /> Watch Later
          </button>
          <button className="action-icon">
            <i className="fas fa-ellipsis-v" /> Add To Playlist
          </button>
        </div>
      </div>
      <div className="card-body">
        <p className="description">{video.description}</p>
      </div>
    </div>
  );
};
export { WatchVideoCard };
