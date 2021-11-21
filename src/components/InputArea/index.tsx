import * as C from "./styles";
import { Item } from "../../types/Item";
import {useState} from 'react';
import {categories} from '../../data/categories';

type Props = {
  onAdd: (item: Item) => void;
};

// criar um state pra cada campo
//passar o esstado como valor, on change 


export const InputArea = ({ onAdd }: Props) => {
  const [data, setData] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {

    let newItem: Item = {
      date: new Date(data),
      category: category,
      title: title,
      value: value,
    };
    console.log(newItem)
    onAdd(newItem);
    clearInput();
  };

  const clearInput = () => {
    setData('');
    setCategory('');
    setTitle('');
    setValue(0);
  }

  return (
    <C.Container>

      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={data} onChange={e => setData(e.target.value)}></C.Input>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={category} onChange={e => setCategory(e.target.value)}>
            <option>Categoria:</option>
           {categoryKeys.map((key, index) =>(
            <option key={index} value={key}> {categories[key].title}</option>
        ))}
        
         </C.Select>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={title} onChange={e => setTitle(e.target.value)} ></C.Input>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number"  value={value} onChange={e => setValue(parseFloat(e.target.value))}></C.Input>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>

    </C.Container>
  );
};
