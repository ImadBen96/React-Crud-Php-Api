import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:8080/API/users').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/API/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return(
        <div>
            <h1>List Users</h1>
            <table className="responsive-table">
                <thead className="responsive-table__head">
                <tr className="responsive-table__row">
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, key) =>
                    <tr className="responsive-table__row" key={key}>
                        <td className="responsive-table__body__text responsive-table__body__text--name">{user.id}</td>
                        <td className="responsive-table__body__text responsive-table__body__text--name">{user.name}</td>
                        <td className="responsive-table__body__text responsive-table__body__text--name">{user.email}</td>
                        <td className="responsive-table__body__text responsive-table__body__text--name">{user.mobile}</td>
                        <td className="responsive-table__body__text responsive-table__body__text--name" style={{display: "flex"}}>
                            <Link className="top-menu-li" to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                            <button className="top-menu-li" onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    );
}