import React, {useState} from "react";
import Layout from "../core/Layout";
import { API } from "../config";

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const {name, email, password } = values;

    const handleChage = name => event => {
        setValues({...values, error: false, [name]: event.target.value});
    };

     const signup = user => {
         //console.log(name, email, password);
         fetch(`${API}/signup`, {
             method: "POST",
             headers: {
                 Accept: "application/json",
                 "Content-Type": "application/json"
             },
             body:JSON.stringify(user)
         })
         .then(response => {
             return response.json()
         })
         .catch (err => {
             console.log(err);
         })
     };

    const clickSubmit = (event) => {
        event.preventDefault();
        signup({ name, email, password });
    };

   

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChage("name")} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChage("email")} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChage("password")} type="password" className="form-control"/>
            </div>
        <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
        </form>
    )
    return (
        <Layout 
            title="Signup" 
            description="Signup to be part of our Music Store Community"
            className="container col-md-8 offset-md-2"
            >
                {signUpForm()}
                {JSON.stringify(values)}
    </Layout>
    )
    
};

export default Signup;