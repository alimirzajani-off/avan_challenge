import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input";
import BudgetItem from "./BudgetItem";

const Budget = () => {
  const [BudgetList, setBudgetList] = useState([]);
  const [BudgetName, setBudgetName] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let budgetList = JSON.parse(localStorage.getItem("budgetList"));
    setBudgetList(budgetList ? budgetList : []);
  };

  const handleBudgetName = (e) => {
    setBudgetName(e.target.value);
  };

  const handleAddNewBudget = () => {
    BudgetList.push(BudgetName);
    localStorage.setItem("budgetList", JSON.stringify(BudgetList));
    setBudgetName("");
    getData();
  };

  return (
    <div className="Budget shadow-md rounded-md	mt-2 m-4">
      <div className="flex w-full justify-between items-end	p-1">
        <Input
          label="موضوع بودجه"
          value={BudgetName}
          onChange={handleBudgetName}
          className="w-full pl-2"
        />
        <Button
          className={"bg-lime-700 rounded p-0.5 w-40 h-10	"}
          onClick={handleAddNewBudget}
        >
          افزودن
        </Button>
      </div>
      <div className="py-1">
        {BudgetList.map((item, index) => (
          <BudgetItem
            key={index}
            title={item}
            itemNumber={index}
            getData={getData}
            handleBudgetName={handleBudgetName}
          />
        ))}
      </div>
    </div>
  );
};

export default Budget;
