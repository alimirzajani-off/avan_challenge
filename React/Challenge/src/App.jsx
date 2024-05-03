import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import ExpenseList from "./Pages/Expense/ExpenseList";
import ExpenseEdit from "./Pages/Expense/ExpenseEdit";
import Budget from "./Pages/Budget/Budget";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Budget" element={<Budget />} />
          <Route path="/Expense" element={<ExpenseList />} />
          <Route path="/Expense/:id" element={<ExpenseEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
