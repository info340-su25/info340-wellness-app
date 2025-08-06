import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Diary from "./pages/Diary";
import Streaks from "./pages/Streaks";
import LogMenu from "./pages/Log/LogMenu";
import Sleep from "./pages/Log/Sleep";
import Diet from "./pages/Log/Diet";
import Exercise from "./pages/Log/Exercise";
import Mood from "./pages/Log/Mood";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="log" element={<LogMenu />} />
        <Route path="log/sleep" element={<Sleep />} />
        <Route path="log/diet" element={<Diet />} />
        <Route path="log/exercise" element={<Exercise />} />
        <Route path="log/mood" element={<Mood />} />
        <Route path="streaks" element={<Streaks />} />
        <Route path="diary" element={<Diary />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
