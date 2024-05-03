import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input";
import BudgetItem from "./BudgetItem";

const Budget = () => {
  const [CategoriesList, setCategoriesList] = useState([]);
  const [CategoriesName, setCategoriesName] = useState("");
  const [CategoriesPrice, setCategoriesPrice] = useState("");

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("CategoriesList"));
    setCategoriesList(list ?? []);
  }, []);

  const handleCategoriesName = (e) => {
    setCategoriesName(e.target.value);
  };

  const handleCategoriesPrice = (e) => {
    setCategoriesPrice(e.target.value);
  };

  const handleAddNewCategories = () => {
    let CategoriesObj = {
      id: CategoriesList?.length ?? 0,
      CategoriesName: CategoriesName,
      CategoriesPrice: CategoriesPrice,
      value: CategoriesList?.length ?? 0,
    };
    CategoriesList.push(CategoriesObj);
    localStorage.setItem("CategoriesList", JSON.stringify(CategoriesList));
    setCategoriesName("");
  };

  return (
    <div className="shadow-md rounded-md	mt-2 m-4 pb-3">
      <div className="H-addCategories flex flex-row flex-wrap justify-between items-center	 px-3">
        <Input
          placeholder="عنوان بودجه را وارد نمائید."
          value={CategoriesName}
          onChange={handleCategoriesName}
          className=" pl-2"
        />
        <Input
          placeholder="مبلغ بودجه را وارد نمائید."
          value={CategoriesPrice}
          onChange={handleCategoriesPrice}
          className=" pl-2"
          type="nubmer"
        />
        <Button
          className={
            "border-2 border-green-700 border-solid hover:bg-lime-700 hover:text-white	rounded p-0.5 w-40 h-10	"
          }
          onClick={handleAddNewCategories}
        >
          افزودن
        </Button>
      </div>
      {CategoriesList.map((item, index) => (
        <BudgetItem key={index} title={item.CategoriesName} />
      ))}
    </div>
  );
};
export default Budget;
