import { useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function CreateUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] =  useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();


        axios.post('http://localhost:8080/API/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });

    };
    return(
        <div>
            <h1>Create user</h1>

            <form onSubmit={handleSubmit} className="form-label form-css-label section">
                <fieldset>
                    <input id="firstName" name="name" type="text" onChange={handleChange} autoComplete="off" required/>
                    <label htmlFor="firstName">Name</label>
                </fieldset>

                <fieldset>
                    <input id="email" name="email" type="text" onChange={handleChange} autoComplete="off" required/>
                    <label htmlFor="email">Email Address</label>
                </fieldset>
                <fieldset>
                    <input id="mobile" name="mobile" type="number" onChange={handleChange} autoComplete="off" required/>
                    <label htmlFor="mobile">Mobile</label>
                </fieldset>
                <button className="top-menu-li">Create User</button>
            </form>
        </div>

    );
}