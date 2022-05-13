import "./PlaylistCard.css";
const PlaylistCard = () => {
  return (
    <div className="card-container pd-x-base">
      <h3>Playlist Name</h3>
      <button className="cross-icon">x</button>
      <div>3 videos</div>
    </div>
  );
};

export { PlaylistCard };
