import { ChangeEvent, ChangeEventHandler } from "react";
import { atom, useRecoilState } from "recoil";
import { textState } from "../utils/textState";

export function TextInput() {
  const [text, setText] = useRecoilState(textState);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
