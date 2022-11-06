import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home_page/home_page.component";
import ProfilePage from "./pages/profile_page/profile_page.component";

import NavBar from "./components/nav_bar/nav_bar.component";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<NavBar />}>
          <Route path="" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
