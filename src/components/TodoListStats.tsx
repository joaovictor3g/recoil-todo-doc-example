import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../atoms/todoListState";

export function TodoListStats() {
  const { percentCompleted, totalCompletedNum, totalNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}
