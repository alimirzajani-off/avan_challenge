import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../../Components/Input/Input";
import DropDown from "../../Components/DropDown/DropDown";
import Button from "../../Components/Button/Button";
const ExpenseEdit = () => {
  let navigate = useNavigate();
  let history = createBrowserHistory();
  const [ExpenseTitle, setExpenseTitle] = useState();
  const [categorievalue, setcategorievalue] = useState(0);
  const [CategoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    let expenseList = JSON.parse(localStorage.getItem("expenseList"));
    let categoriesList = JSON.parse(localStorage.getItem("CategoriesList"));
    let item = expenseList.filter(
      (item) => item?.id == Number(history.location.pathname.split("/")[2])
    );
    let categorievalue = categoriesList.find(
      (it) => it.CategoriesName == item[0].categories
    );
    setcategorievalue(categorievalue?.value);
    setCategoriesList(categoriesList ?? []);
    setExpenseTitle(item[0].ExpenseName);
  }, []);

  const handleEditItem = () => {
    let List = JSON.parse(localStorage.getItem("expenseList"));
    let newList = List.map((item, index) => {
      if (index == Number(history.location.pathname.split("/")[2])) {
        let findBudget = CategoriesList.find(
          (it) => it.value == categorievalue
        );
        item.ExpenseName = ExpenseTitle;
        item.categories = findBudget?.CategoriesName;
        return item;
      } else {
        return item;
      }
    });
    localStorage.setItem("expenseList", JSON.stringify(newList));
    navigate("/Expense");
  };

  const handleChangeTitle = (e) => {
    setExpenseTitle(e.target.value);
  };

  const handleChangeCategories = (e) => {
    setcategorievalue(e.target.value);
  };

  return (
    <div className="shadow-md rounded-md	mt-2 m-4 px-3 pb-3">
      <div className="flex justify-between flex-wrap">
        <Input
          className="sm:w-1/2"
          value={ExpenseTitle}
          onChange={handleChangeTitle}
          label="مبلغ هزینه"
          type="number"
        />
        <DropDown
          className="mr-1 sm:w-1/3"
          label={"انتخاب نوع بودجه"}
          option={CategoriesList}
          onChange={handleChangeCategories}
          value={categorievalue}
        />
      </div>
      <div className="mt-4">
        <Button
          className={
            "w-40 h-10 border-2 border-green-700 border-solid hover:bg-lime-700 hover:text-white rounded"
          }
          onClick={handleEditItem}
        >
          ذخیره
        </Button>
      </div>
    </div>
  );
};

export default ExpenseEdit;
