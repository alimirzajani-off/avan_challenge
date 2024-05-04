import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const [ExpenseList, setExpenseList] = useState([]);
  const [ExpenseOrginalList, setExpenseOrginalList] = useState([]);
  const [ExpenseName, setExpenseName] = useState("");
  const [ExpenseFilter, setExpenseFilter] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let expenseList = JSON.parse(localStorage.getItem("expenseList"));
    setExpenseList(expenseList ? expenseList : []);
    setExpenseOrginalList(expenseList ? expenseList : []);
  };

  const handleExpenseName = (e) => {
    setExpenseName(e.target.value);
  };

  const handleFilter = (e) => {
    setExpenseFilter(e.target.value);
    let filter = ExpenseOrginalList.filter((item) => {
      return item.categories.includes(e.target.value);
    });
    setExpenseList(filter);
  };

  const handleAddNewExpense = () => {
    if (ExpenseName) {
      let ExpenseObj = {
        id: ExpenseList.length,
        ExpenseName: Number(ExpenseName),
        categories: "",
        budget: "",
      };
      ExpenseList.push(ExpenseObj);
      localStorage.setItem("expenseList", JSON.stringify(ExpenseList));
      setExpenseName("");
      getData();
    }
  };
  return (
    <div className="Expense shadow-md rounded-md	mt-2 m-4 pb-3">
      <div className="flex w-full justify-between items-end	p-1 px-3">
        <Input
          placeholder="هزینه خود را وارد نمائید."
          value={ExpenseName}
          onChange={handleExpenseName}
          className="w-full pl-2"
          type="number"
        />
        <Button
          className={
            "border-2 border-green-700 border-solid hover:bg-lime-700 hover:text-white rounded p-0.5 w-40 h-10	"
          }
          onClick={handleAddNewExpense}
        >
          افزودن
        </Button>
      </div>
      <div className="px-3 pt-1">
        <Input
          onChange={handleFilter}
          value={ExpenseFilter}
          placeholder={"جست و جو کنید..."}
        />
      </div>
      <div className="py-1">
        {ExpenseFilter.length > 0 && ExpenseList.length <= 0 ? (
          <div className="px-4">موردی یافت نشد!</div>
        ) : (
          <>
            {ExpenseList.map((item, index) => (
              <ExpenseItem
                key={index}
                title={item.ExpenseName}
                categories={item.categories}
                itemNumber={index}
                getData={getData}
                handleExpenseName={handleExpenseName}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
