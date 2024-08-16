import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Header /> }>
          <Route path="/" index element={ <Home /> } />
          <Route path="contact" element={ <Contact /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
