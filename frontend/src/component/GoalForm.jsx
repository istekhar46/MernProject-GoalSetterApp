import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {createGoal} from '../features/goals/goalSlice'

function GoalForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText('');
  };

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Goal</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="for-group">
            <button className="btn btn-block" type="submit">
              Add Goals
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default GoalForm;
