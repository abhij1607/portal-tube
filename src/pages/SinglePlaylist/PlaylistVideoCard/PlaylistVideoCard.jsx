import "./PlaylistVideoCard.css";

const PlaylistVideoCard = () => {
  return (
    <div className="card-container playlist-card">
      <div className="card-part-1">
        <img
          className="card-img-top"
          src="https://picsum.photos/600/400"
          alt="card-img"
        />
        <div className="card-info">
          <h3 className="card-title">Our Changing Planet</h3>
          <p className="card-author">by kurt Wagner</p>
        </div>
        <button className="align-right pd-x-sm">
          <i className="fa fa-2x fa-trash" />
        </button>
      </div>
    </div>
  );
};

export { PlaylistVideoCard };
