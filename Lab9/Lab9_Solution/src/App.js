import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080/posts/",
});
function App() {
  return (
    <div className="App">
      <h1> WAA Lab8</h1>
      <Dashboard />
    </div>
  );
}

export default App;
