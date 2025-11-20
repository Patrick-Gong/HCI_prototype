import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import MainChat from "./pages/MainChat.jsx";
import Alarms from "./pages/Alarms.jsx";
import Saved from "./pages/Saved.jsx";
import AlarmSettings from "./pages/AlarmSettings.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/main-chat" element={<MainChat />} />
        <Route path="/alarms" element={<Alarms />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/alarm-settings" element={<AlarmSettings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
