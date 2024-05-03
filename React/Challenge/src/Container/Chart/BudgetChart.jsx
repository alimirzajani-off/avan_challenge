import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const BudgetChart = ({ data, budget }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const totalExpenses = data.reduce((acc, item) => acc + item.ExpenseName, 0);
  const remainingBudget = budget.CategoriesPrice - totalExpenses;

  const chartData = [
    ...data.map((item) => ({
      name: item.categories,
      value: item.ExpenseName,
    })),
    { name: "باقیمانده بودجه", value: remainingBudget },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8042"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default BudgetChart;
