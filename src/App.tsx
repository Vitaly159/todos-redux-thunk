import Notes from "./components/Notes/Notes";
import "./app.css";

function App() {

  return (
    <div className="app-wrapper">
      <div className="header">
        <h1>todos</h1>
      </div>

      <Notes />

      <div className="footer footer1"></div>
      <div className="footer footer2"></div>
    </div>
  );
}

export default App;
