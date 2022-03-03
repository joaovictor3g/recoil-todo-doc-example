import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";
import { v4 } from "uuid";

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: v4(),
        text: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
