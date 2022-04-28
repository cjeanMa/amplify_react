import Navbar from "./components/Navbar";
import Talleres from "./pages/talleres/Talleres";
import "./assets/styles/general.css"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Talleres></Talleres>
      </div>

    </>
  );
}

export default App;
