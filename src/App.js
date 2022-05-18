import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";
import {
  Home,
  Login,
  SignUp,
  Playlist,
  SinglePlaylist,
  WatchLater,
  SingleVideoPage,
  Liked,
} from "./pages";
import { RequiresAuth } from "./RequireAuth/RequiresAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:watchid" element={<SingleVideoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<RequiresAuth />}>
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/playlist/:playlistid" element={<SinglePlaylist />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/liked" element={<Liked />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
