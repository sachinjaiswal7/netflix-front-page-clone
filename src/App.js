import "./App.scss"
import "./Components/Home/Home.scss"
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
 

  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element = {<Home />}/>
      </Routes>
    </Router>
  )
}

export default App;
