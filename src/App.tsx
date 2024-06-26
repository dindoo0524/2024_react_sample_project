import Layout from "./components/Layouts/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Classes from "./routes/Courses";
import Mypage from "./routes/Mypage";
import NoMatch from "./routes/NoMatch";
import ClassDetail from "./routes/CourseDetail";
import Notices from "./routes/Notices";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/:courseSeq" element={<ClassDetail />} />
          <Route path="notice" element={<Notices />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
