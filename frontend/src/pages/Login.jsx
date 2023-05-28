import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit =(e)=>{
    e.preventDefault();
  }


  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Please Login and Start setting Goals</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            className="form-group"
            value={email}
            placeholder="Enter Your Email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            className="form-group"
            value={password}
            placeholder="Enter Your Password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block" >Submit</button>
        </div>
        </form>
      </section>
    </>
  );
}

export default Login;
