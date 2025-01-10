import {categories} from "../../data/categories";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
 
} from "recharts";

const Chart = ({ filteredList }: any) => {
    const isExpense = (item: any) => {
        return categories[item.category].expense;
    };
    
    const cleanList = filteredList.map((item: any) => ({
        date: item.date.toLocaleDateString() ,
        expanse: isExpense(item) ? item.value : 0,
        income: !isExpense(item) ? item.value : 0,
    }));



  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        width={500}
        height={400}
        data={cleanList}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#C2E0FD" />
        <Tooltip />
        <Legend />
        <XAxis
        stroke="#C2E0FD"
          dataKey="date"
          label={{ value: "Data", position: "insideBottomRight", offset: 0, color:"#C2E0FD" }}
        />
        <YAxis
        stroke="#C2E0FD"
          label={{ value: "Quantia", angle: -90, position: "insideLeft", color:"#C2E0FD" }}
        />
        <Line type="monotone" dataKey="expanse" stroke="red" />
        <Line type="monotone" dataKey="income" stroke="green" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
