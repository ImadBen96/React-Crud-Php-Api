
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";


function App() {
  return (
    <div className="App">
      <h1 className="top-title">React CRUD operations using PHP API and MySQL</h1>

        <BrowserRouter>
            <nav>
                <ul>
                    <li className="top-menu-li">
                        <Link to="/">List Users</Link>
                    </li>
                    <li className="top-menu-li">
                        <Link to="user/create">Create User</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route index element={<ListUser />} />
                <Route path="user/create" element={<CreateUser />} />
                <Route path="user/:id/edit" element={<EditUser />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
