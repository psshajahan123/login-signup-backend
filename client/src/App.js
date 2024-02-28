import { Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Register} />
      <Route exact path="/login" Component={Login} />
    </Routes>
  );
}

export default App;
