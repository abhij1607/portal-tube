import { VideoCard } from "./RelatedVideoCard/RelatedVideoCard";

const RelatedVideoPane = ({ relatedVideos }) => {
  return (
    <aside>
      <h2>Related Videos</h2>
      {relatedVideos.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </aside>
  );
};

export { RelatedVideoPane };
