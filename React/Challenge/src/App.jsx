import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Budget from "./Pages/Budget/Budget";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Budget" element={<Budget />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
