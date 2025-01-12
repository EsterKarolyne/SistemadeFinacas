
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  BarChart
} from "recharts";
import { getYearlyData } from '../../helpers/dateFilter';
import { categories } from "../../data/categories";
import * as C from "../../App.styles";
const Chart = ({ filteredList, fullList }: any) => {
  const isExpense = (item: any) => {
    return categories[item.category].expense;
  };

  const cleanList = filteredList.map((item: any) => ({
    date: item.date.toLocaleDateString(),
    Gastos: isExpense(item) ? item.value : 0,
    Ganhos: !isExpense(item) ? item.value : 0,
  }));


  const yearList = getYearlyData(fullList, categories); 
  return (
    <C.Body>
      <C.HeaderText>Acompanhe seus gráficos! 🔽</C.HeaderText>

      <C.SubTitle>Mensal </C.SubTitle>
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
            label={{
              value: "Data",
              position: "insideBottomRight",
              offset: 0,
              color: "#C2E0FD",
            }}
          />
          <YAxis
            stroke="#C2E0FD"
            label={{
              value: "Quantia",
              angle: -90,
              position: "insideLeft",
              color: "#C2E0FD",
            }}
          />
          <Line type="monotone" dataKey="Gastos" stroke="red" />
          <Line type="monotone" dataKey="Ganhos" stroke="green" />
        </ComposedChart>
      </ResponsiveContainer>
      <div>

        <C.SubTitle>Anual </C.SubTitle>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={400}
          data={yearList}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#C2E0FD" strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <XAxis  stroke="#C2E0FD" dataKey="month" label={{ value: 'Mês', position: 'insideBottomRight', offset: 0, color: "#C2E0FD", }} />
          <YAxis  stroke="#C2E0FD" label={{ value: 'Quantia', angle: -90, position: 'insideLeft', color: "#C2E0FD", }} />
          <Bar dataKey="Gastos" barSize={20} fill="red"/>
          <Bar dataKey="Ganhos" barSize={20} fill="green" />
          
        </BarChart>
      </ResponsiveContainer>
      </div>
    </C.Body>
  );
};

export default Chart;
