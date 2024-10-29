import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/shared/layout";
import Dashboard from "./components/Dashboard";
import Trips from "./components/Trips";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/trips" element={<Trips />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
