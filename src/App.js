import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import { AnimatePresence } from "framer-motion";


function App () {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

function Root () {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={ location } key={ location.pathname }>
        <Route path="/" element={ <Header /> }>
          <Route path="/" index element={ <Home /> } />
          <Route path="contact" element={ <Contact /> } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
