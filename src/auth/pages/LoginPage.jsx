import { useState } from "react";
const initialLoginForm = {
    username: '',
    password: '',
}
export const LoginPage = () => {

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const {username, password} = loginForm;

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }
    return (
    <div className="modal" style={{display: "block"}}tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Login Page</h5>
          </div>

          <form>
            <div className="modal-body">
                <input 
                    type="text" 
                    className="form-control my-3 w-75%"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}/>

                <input 
                    type="password" 
                    className="form-control my-3 w-75%"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange}/>
            </div>
            <div className="modal-footer">
              <button 
                type="submit" 
                className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
