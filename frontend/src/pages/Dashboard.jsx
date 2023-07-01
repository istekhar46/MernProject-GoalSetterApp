import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoalForm from "../component/GoalForm";

function dashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (<>
  <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Goal Dashboard</p>
  </section>
  <GoalForm/>
  
  </>)
}

export default dashboard;
