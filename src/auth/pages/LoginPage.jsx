import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const { userName,  onInputChange } = useForm({ userName: '' })

  const onLogin = ( e ) => {
    e.preventDefault()
    const lastPah = localStorage.getItem('lastPath') || '/'
    login(userName)
  
    navigate( lastPah, {
      replace: true,
    });
  };

  return (
    <>
      <div className="container mt-5">

        <div className="row">
          <div className="col-md-6">
            <h1> Login </h1>
            <hr />
            <form onSubmit={onLogin}>
              <input 
                type="text" 
                name="userName" 
                placeholder="Introduce tu nombre"
                className="form-control mb-4 py-2"
                value={ userName } 
                onChange={ onInputChange }
              />
            </form>

          </div>
          
        </div>

        <button className="btn btn-success px-5 py-3" onClick={onLogin} disabled={!userName} >
          Login
        </button>
      </div>
    </>
  );
};
