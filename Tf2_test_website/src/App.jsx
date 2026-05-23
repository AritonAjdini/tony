import styles from "./App.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Navigation.jsx";
import { LoginForm } from "./Login.jsx"; 
import { Database } from "./Database_tf2.jsx";
import { TextBase } from "./Text.jsx"; 

export const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Logic: Show Navbar if we are NOT on the login page */}
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Database" element={<Database />} />
        <Route path="/Text" element={<TextBase />} />
      </Routes>
    </>
  );
};

export default App;