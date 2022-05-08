import "./Home.css";
import { VideoCard } from "./VideoCard/VideoCard";
import { CategoriesPane } from "./CategoriesPane/CategoriesPane";

const Home = () => {
  return (
    <main>
      <CategoriesPane />
      <div className="cards-layout">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </main>
  );
};

export { Home };
