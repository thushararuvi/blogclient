import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route
          path="/settings"
          element={user ? <Settings /> : <Login />}
        ></Route>
        <Route path="/post/:postid" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
