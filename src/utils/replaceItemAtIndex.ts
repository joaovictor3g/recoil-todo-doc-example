import { Item } from "../atoms/todoListState";

export function replaceItemAtIndex(arr: Item[], index: number, newValue: Item) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
