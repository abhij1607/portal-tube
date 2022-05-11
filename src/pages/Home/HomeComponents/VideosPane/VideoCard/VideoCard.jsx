import { getNumberInFormat } from "../../../../../utils/number-format";
import "./VideoCard.css";
import { useState } from "react";

const VideoCard = ({ video }) => {
  const [isVideoOptionsActive, setIsVideoOptionsActive] = useState(false);
  return (
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
          className="align-right pd-x-xsm"
          onClick={() => setIsVideoOptionsActive((previous) => !previous)}
        >
          <i className="fas fa-ellipsis-v" />
        </button>
        <ul
          className={`additional-options pd-y-base pd-x-base ${
            isVideoOptionsActive ? "" : "hide"
          }`}
        >
          <li>Add to watch later</li>
          <li>Add to playlist</li>
        </ul>
      </div>
    </div>
  );
};
export { VideoCard };
