const VideoCard = () => {
  return (
    <div className="card-container">
      <img
        className="card-img-top"
        src="https://i.ytimg.com/vi/oUSYOo-dJa0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBempWoZR2-jdHMPubqOlRRKUCAvA"
        alt="far-cry-6"
        width="360"
      />
      <div className="card-info flex-row">
        <div>
          <h3 className="card-title">
            Far Cry 6 Creative Stealth Kills (FND Checkpoint, Outpost)
          </h3>
          <p className="card-author">Fusion</p>
          <div className="card-author flex-row gap-1">
            <span>408k views</span>
            <span>6 months ago</span>
          </div>
        </div>
        <button className="align-right">
          <i className="fas fa-ellipsis-v" />
        </button>
      </div>
    </div>
  );
};
export { VideoCard };
