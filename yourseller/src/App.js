import logo from "./logo.svg";
import "./App.css";
import Navbar from "./comoponents/Navbar";
import Allroutes from "./comoponents/AllRoutes";
import MainPage from "./comoponents/pages/mainpage";
import Footer from "./comoponents/Footer";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
