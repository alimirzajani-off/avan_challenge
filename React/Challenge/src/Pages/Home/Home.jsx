import { useEffect, useState } from "react";
import DropDown from "../../Components/DropDown/DropDown";
import BudgetChart from "../../Container/Chart/BudgetChart.jsx";

// دادههای بودجه
const sampleBudget = {
  id: 0,
  CategoriesName: "تست",
  CategoriesPrice: 90000000,
  value: 0,
};

const Home = () => {
  const [categorieSelected, setcategorieSelected] = useState("");
  const [expenseTotal, setexpenseTotal] = useState(0);
  const [categoriesList, setcategoriesList] = useState([]);
  const [expenseList, setexpenseList] = useState([]);
  const [categoriesPrice, setcategoriesPrice] = useState(0);

  useEffect(() => {
    let categories = JSON.parse(localStorage.getItem("CategoriesList"));
    setcategoriesList(categories ? categories : []);
    if (categorieSelected) {
      setcategoriesPrice(categories[categorieSelected].CategoriesPrice);
      let expense = JSON.parse(localStorage.getItem("expenseList"));
      const sum = expense.reduce((total, item) => {
        if (item.categories === categories[categorieSelected].CategoriesName) {
          return total + item.ExpenseName;
        }
        return total;
      }, 0);
      setexpenseList(expense);
      setexpenseTotal(sum);
    }
  }, [categorieSelected]);

  const handleCategorieSelect = (e) => {
    setcategorieSelected(e.target.value);
  };
  console.log(expenseList, categoriesList[categorieSelected]);
  return (
    <div className="shadow-md rounded-md	mt-2 m-4 pb-3 p-4">
      {!categorieSelected && <>لطفا یک بودجه را انتخاب کنید</>}
      <DropDown
        option={categoriesList}
        value={categorieSelected}
        onChange={handleCategorieSelect}
      />
      {categorieSelected && (
        <>
          <BudgetChart
            data={expenseList}
            budget={categoriesList[categorieSelected]}
          />
          از {categoriesPrice} ماهانه خود {expenseTotal} را خرج نموده و{" "}
          {categoriesPrice - expenseTotal} باقی مانده است.
        </>
      )}
    </div>
  );
};

export default Home;
