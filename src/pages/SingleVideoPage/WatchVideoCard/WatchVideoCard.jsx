import "./WatchVideoCard.css";

const WatchVideoCard = () => {
  return (
    <div className="card-container watch-video-card">
      <img
        className="card-img-top"
        src="https://picsum.photos/600/400"
        alt="card-img"
      />
      <div className="card-info">
        <h1 className="card-title video-title">Our Changing Planet</h1>
      </div>
      <div className="card-action">
        <span className="alight-left">Views</span>
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
        <p className="description">
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </p>
      </div>
    </div>
  );
};
export { WatchVideoCard };
