import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const ExpenseItem = ({
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
    <div className="ExpenseItem flex justify-between items-center flex-wrap	min-w-32	 border-2 rounded-md hover:bg-slate-200 mx-3 my-1 py-2">
      <div className="BI-Title mr-2">
        <div>{title}</div>
        <div>{categories}</div>
      </div>
      <div className="BI-Buttons flex flex-row items-center">
        <div className="mx-1">
          <Link
            className="border-2 border-sky-500	 border-solid hover:bg-cyan-500	 hover:text-white rounded-md p-1 w-35"
            to={`${itemNumber}`}
          >
            ویرایش
          </Link>
        </div>
        <div className="mx-1 mr-0">
          <Button
            className="border-2 border-rose-800	 border-solid hover:bg-rose-800	 hover:text-white rounded-md p-1 	w-35"
            onClick={handleDeleteItem}
          >
            حذف
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
