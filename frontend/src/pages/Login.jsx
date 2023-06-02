import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../component/spinner";
import { toast } from "react-toastify";
import { login,reset } from "../features/auth/authSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password} = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isLoading , isSuccess , isError , message} = useSelector((state)=> state.auth)

 useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess || user){
    navigate('/')
  }
  dispatch(reset())

 },[user,isError,isSuccess,message,navigate,dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit =(e)=>{
    e.preventDefault();
    
    const userData = {
      email,
      password,
    }

    dispatch(login(userData))

  }


  if(isLoading){
    return <Spinner/>
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
