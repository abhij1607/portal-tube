import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/Signup/Signup";
import { Playlist } from "./pages/Playlist/Playlist";
import { SinglePlaylist } from "./pages/SinglePlaylist/SinglePlaylist";
// import { RequiresAuth } from "./RequireAuth/RequiresAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/:playlistid" element={<SinglePlaylist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
