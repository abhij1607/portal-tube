import "./SingleVideoPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WatchVideoCard } from "./WatchVideoCard/WatchVideoCard";
import { RelatedVideoPane } from "./RelatedVideoPane/RelatedVideoPane";
import { fetchVideo, fetchRelatedVideos } from "../../utils/server-request";

const SingleVideoPage = () => {
  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { watchid } = useParams();

  useEffect(() => {
    (async () => {
      const currentVideo = await fetchVideo(watchid);
      setVideo(currentVideo);
      const relatedVideos = await fetchRelatedVideos(
        currentVideo._id,
        currentVideo.category[0]
      );
      setRelatedVideos(relatedVideos.slice(0, 3));
    })();
  }, [watchid]);

  return (
    <main className="wrapper wrapper-video-page">
      <WatchVideoCard video={video} />
      <RelatedVideoPane relatedVideos={relatedVideos} />
    </main>
  );
};

export { SingleVideoPage };
