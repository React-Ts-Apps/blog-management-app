import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList/BlogList";
import BlogPost from "./components/BlogPost/BlogPost";
import Favourites from "./components/Favourites/Favourites";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<BlogList />}></Route>
          <Route path="/blog/:id" element={<BlogPost />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
