import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
import { categories } from "../../data/categories";
import { Input, DatePicker, Select, Button } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [data, setData] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<number | undefined>(undefined);
  const dateFormat = "DD/MM/YYYY";

  const categoryOptions = Object.keys(categories).map((key) => ({
    value: key,
    label: categories[key].title,
  }));

  const handleAddEvent = () => {
    if (!data || !category || !title || value === undefined) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    
    const newItem: Item = {
      date: new Date(data),
      category,
      title,
      value,
    };
    onAdd(newItem);
    clearInput();
  };

  const clearInput = () => {
    setData(null);
    setCategory("");
    setTitle("");
    setValue(undefined);
  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <DatePicker
         style={{ width: 150 }}
          format={dateFormat}
          onChange={(date: any, dateString: any) => setData(date)}
         
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <Select
          style={{ width: 150 }}
          options={categoryOptions}
          onChange={(value) => setCategory(value)}
          value={category}
          placeholder="Selecione uma categoria"
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <Input
         style={{ width: 150 }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título"
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <Input
         style={{ width: 150 }}
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          placeholder="Digite o valor"
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <Button  style={{ width: 150 }} type="primary" onClick={handleAddEvent}>
          Adicionar
        </Button>
      </C.InputLabel>
    </C.Container>
  );
};