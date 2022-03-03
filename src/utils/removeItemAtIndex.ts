import { Item } from "../atoms/todoListState";

export function removeItemAtIndex(arr: Item[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
