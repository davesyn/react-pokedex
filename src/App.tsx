import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// @ts-expect-error - no types available
import '@fontsource/press-start-2p';

import './App.scss';

const App = () => {
  // The BrowserRouter component is a wrapper that enables the use of routing in the application
  // Expected routes:
  // - [BASE_URL]/ - Home component
  // - [BASE_URL]/:name - Detail component
  // - Any other route (*) - Navigate to [BASE_URL]/
  return <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:name"} element={<Detail />} />
      <Route path={"*"} element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
};

export default App;