import Layout from "./components/Layouts/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Classes from "./routes/Classes";
import Mypage from "./routes/Mypage";
import NoMatch from "./routes/NoMatch";
import ClassDetail from "./routes/ClassDetail";
import Notice from "./routes/Notice";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/:courseSeq" element={<ClassDetail />} />
          <Route path="notice" element={<Notice />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
