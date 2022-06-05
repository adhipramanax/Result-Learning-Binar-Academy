// import Counter from "./components/Counter";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Post from "./page/Post";
import Users from "./page/Users";
import Albums from "./page/Albums";
import Gallery from "./page/Gallery";
// import Counter from "./components/Counter";

// const nama = (param1, param2) => {
// }
// function nama(param1, param2) {
// }

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/user" element={<Users />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
