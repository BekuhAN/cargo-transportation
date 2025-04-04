import { ReactElement, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

function App(): ReactElement {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HeroUIProvider>
      <ToastProvider />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route> */}
      </Routes>
      <Footer />
    </HeroUIProvider>
  );
}

export default App;
