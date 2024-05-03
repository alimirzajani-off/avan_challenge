import { useState } from "react";
import Button from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input";
import { Link } from "react-router-dom";

const BudgetItem = ({
  title,
  itemNumber,
  getData,
  categories = "",
  handleExpenseName,
  ...props
}) => {
  const handleDeleteItem = async () => {
    let List = JSON.parse(localStorage.getItem("expenseList"));
    let newList = await List.filter((item, index) => {
      return index != itemNumber;
    });
    await localStorage.setItem("expenseList", JSON.stringify(newList));
    getData();
  };

  return (
    <div className="BudgetItem flex justify-between items-center border-2 rounded-md hover:bg-slate-200 mx-3 my-1 py-2">
      <div className="BI-Title min-w-96 mr-2 w-full">
        <div>{title}</div>
      </div>
    </div>
  );
};

export default BudgetItem;
