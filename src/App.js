import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import { AnimatePresence, MotionConfig } from "framer-motion";


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
    <MotionConfig transition={ { type: "just", staggerChildren: 0.1 } }>
      <AnimatePresence mode="wait" initial={ false }>
        <Routes location={ location } key={ location.pathname }>
          <Route path="/" element={ <Header /> }>
            <Route path="/" index element={ <Home /> } />
            {/* <Route path="contact" element={ <Contact /> } />
            <Route path="services" element={ <Services /> } /> */}
          </Route>
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  );
}

export default App;
