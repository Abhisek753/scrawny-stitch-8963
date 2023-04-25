import logo from "./logo.svg";
import "./App.css";
import Navbar from "./comoponents/Navbar";
import Allroutes from "./comoponents/AllRoutes";
import MainPage from "./comoponents/pages/mainpage";
import Footer from "./comoponents/Footer";
import WithSubnavigation from "./comoponents/pages/Bottomnavbar";
import { Box } from "@chakra-ui/react";

function App() {
  
  return (
    <div className="App"  >
      <Box  >
      <Navbar />
      <WithSubnavigation/>
      <Allroutes />
      <Footer />
      </Box>
    </div>
  );
}

export default App;
