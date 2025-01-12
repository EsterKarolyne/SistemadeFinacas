import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");

  for (let i in list) {
    if (
      list[i]?.date?.getFullYear() === parseInt(year) &&
      list[i]?.date?.getMonth() === parseInt(month) - 1
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
};

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `
    ${months[parseInt(month) - 1]} de ${year}`;
};

export const getYearlyData = (list:any, categories: any) => {
  
  let monthlyData = Array.from({ length: 12 }, () => ({ Gastos: 0, Ganhos: 0 }));

  
  list.forEach((item: any) => {
    const month = item.date.getMonth();
    if (categories[item.category].expense) {
      monthlyData[month].Gastos += item.value;
    } else {
      monthlyData[month].Ganhos += item.value;
    }
  });

  return monthlyData.map((data, index) => ({
    month: new Date(0, index).toLocaleString('default', { month: 'long' }), 
    Gastos: data.Gastos,
    Ganhos: data.Ganhos,
  }));
};