import { getNumberInFormat } from "../../../../utils/number-format";
import "./RelatedVideoCard.css";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card-container"
      onClick={() => navigate(`/watch/${video._id}`)}
    >
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
      </div>
    </div>
  );
};
export { VideoCard };
