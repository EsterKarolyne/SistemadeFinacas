import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

const App = () => {
  const [list, setList] = useState<Item[]>(() => {
    const savedList = localStorage.getItem("financeAppList");
    const parsedList = savedList ? JSON.parse(savedList) : items;

    // Garantir que o campo `date` seja um objeto Date
    return parsedList.map((item: Item) => ({
      ...item,
      date: new Date(item.date),
    }));
  });

  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expanse, setExpanse] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expanse = 0;
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expanse += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpanse(expanse);
  }, [filteredList]);

  useEffect(() => {
    localStorage.setItem("financeAppList", JSON.stringify(list));
  }, [list]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    const newItem = { ...item, date: new Date(item.date) }; // Garantir que o `date` é um objeto Date
    let newList = [...list];
    newList.push(newItem);
    setList(newList);
  };

  const handleRemoveItem = (index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expanse={expanse}
        ></InfoArea>

        <InputArea onAdd={handleAddItem}></InputArea>

        <TableArea list={filteredList} onRemoveItem={handleRemoveItem} />
      </C.Body>
    </C.Container>
  );
};

export default App;
