import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function () {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost:8080/API/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8080/API/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });

    }
    return(
        <div>
            <h1>Create user</h1>

            <form onSubmit={handleSubmit} className="form-label form-css-label section">
                <fieldset>
                    <input value={inputs.name} id="firstName" name="name" type="text" onChange={handleChange} autoComplete="off" required/>
                    <label htmlFor="firstName">Name</label>
                </fieldset>

                <fieldset>
                    <input value={inputs.email}  id="email" name="email" type="text" onChange={handleChange} autoComplete="off" required/>
                    <label htmlFor="email">Email Address</label>
                </fieldset>
                <fieldset>
                    <input value={inputs.mobile} id="mobile" name="mobile" type="number" onChange={handleChange} autoComplete="off" required/>
                    <label htmlFor="mobile">Mobile</label>
                </fieldset>
                <button className="top-menu-li">Update User</button>
            </form>
        </div>

    );
}