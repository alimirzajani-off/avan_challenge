import { useState } from "react";
import Button from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input";

const BudgetItem = ({
  title,
  itemNumber,
  getData,
  handleBudgetName,
  ...props
}) => {
  const [editable, seteditable] = useState(false);
  const [BudgetTitle, setBudgetTitle] = useState(title);

  const handleChangeTitle = (e) => {
    setBudgetTitle(e.target.value);
  };

  const handleEditItem = () => {
    if (editable && title != BudgetTitle) {
      let List = JSON.parse(localStorage.getItem("budgetList"));
      let newList = List.map((item, index) => {
        if (index == itemNumber) {
          return (item = BudgetTitle);
        } else {
          return item;
        }
      });
      localStorage.setItem("budgetList", JSON.stringify(newList));
      seteditable(!editable);
    } else {
      seteditable(!editable);
    }
  };

  const handleDeleteItem = async () => {
    let List = JSON.parse(localStorage.getItem("budgetList"));
    let newList = await List.filter((item, index) => {
      return index != itemNumber;
    });
    await localStorage.setItem("budgetList", JSON.stringify(newList));
    getData();
  };

  return (
    <div className="BudgetItem flex justify-between items-center border-2 rounded-md hover:bg-slate-200 mx-3 my-1 py-2">
      <div className="BI-Title min-w-96 mr-2 w-full">
        <Input
          value={BudgetTitle}
          onChange={handleChangeTitle}
          disabled={!editable}
        />
      </div>
      <div className="BI-Buttons flex flex-row">
        <div className="mx-1">
          <Button
            className="rounded-md p-1 bg-cyan-600 text-white w-35"
            onClick={handleEditItem}
          >
            ویرایش
          </Button>
        </div>
        <div className="mx-1 mr-0">
          <Button
            className="rounded-md p-1 bg-red-600 text-white	w-35"
            onClick={handleDeleteItem}
          >
            حذف
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
