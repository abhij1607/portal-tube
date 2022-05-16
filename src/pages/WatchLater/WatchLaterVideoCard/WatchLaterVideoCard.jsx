import "./WatchLaterVideoCard.css";
import { requestDeleteVideoInWatchLater } from "../../../utils/server-request";
import { useAuth } from "../../../context/auth-context";

const WatchLaterVideoCard = ({ video }) => {
  const {
    userState: { userToken },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  const handleRemoveVideo = () =>
    requestDeleteVideoInWatchLater(video._id, headers, userDispatch);

  return (
    <div className="card-container playlist-card">
      <div className="card-part-1">
        <img
          className="card-img-top"
          src={video.videoThumbnail}
          alt={video.title}
        />
        <div className="card-info">
          <h3 className="card-title">{video.title}</h3>
          <p className="card-author">{video.channelName}</p>
        </div>
        <button className="align-right pd-x-sm btn" onClick={handleRemoveVideo}>
          <i className="fa fa-2x fa-trash" />
        </button>
      </div>
    </div>
  );
};

export { WatchLaterVideoCard };
