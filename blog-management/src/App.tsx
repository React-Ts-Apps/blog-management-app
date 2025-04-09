import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList/BlogList";
import BlogPost from "./components/BlogPost/BlogPost";
import Favourites from "./components/Favourites/Favourites";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <Router>
      <div className="flex mr-4">
        <SideBar />
        <div className="flex-1 pl-4">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
