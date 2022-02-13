import React, { useState } from "react";
import Tittle from "./components/Tittle";
import Label from "./components/Label";
import Input from "./components/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../css/login.css";
import fetchData from "../utils/fetchData";

const url = `https://reqres.in/api/login`;

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleChange(name, value) {
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  async function handleSubmit() {
    let account = { email, password };
    console.log(account);
    const data = await fetchData(account, url, "POST");
    console.log(data.token);
    if (data.token) window.sessionStorage.setItem("token", data.token);
    console.log(window.sessionStorage);
    window.location.href = "./";
  }

  return (
    <div className="prueba">
      <div className="container">
        <div className="row">
          <div className="col-md-offset- col-md-4 text-center">
            <div className="form-login">
              <Tittle text="Secure Login" />
              <Label text="Mail" />
              <Input
                attribute={{
                  id: "email",
                  name: "email",
                  type: "text",
                  placeholder: "please put your mail",
                }}
                handleChange={handleChange}
              />
              <Label text="Password" />
              <Input
                attribute={{
                  id: "password",
                  name: "password",
                  type: "password",
                  placeholder: "please put your pass",
                }}
                handleChange={handleChange}
              />
              <button className="btn btn-danger btn-md" onClick={handleSubmit}>
                <span>
                  {" "}
                  ingresar <i className="fa fa-sign-in"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
