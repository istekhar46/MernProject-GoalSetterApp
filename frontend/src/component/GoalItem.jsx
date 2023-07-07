import { useDispatch } from "react-redux";
import {deleteGoal} from '../features/goals/goalSlice'

function GoalItem(props) {
    const dispatch = useDispatch();
  return (
    <>
      <div className="goal">
        {/* <p>this p in the component</p> */}
        <div>{new Date(props.goal.createdAt).toLocaleString('en-US')}</div>
        <h3>{props.goal.text}</h3>
        <button className="close"  onClick={()=>dispatch(deleteGoal(props.goal._id))}>X</button>
      </div>
    </>
  );
}

export default GoalItem;
