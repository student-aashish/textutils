import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import About from "./components/About"; // Router disabled so not used now
import TextForm from "./components/TextForm";

// 🟡 Router imports (commented out for now)
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // ✅ Show alert message
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  // ✅ Toggle dark/light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* 🟡 Router wrapper (disabled)
      <Router>
      */}

      {/* ✅ Navbar active */}
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* ✅ Alert system active */}
      <Alert alert={alert} />

      <div className="container my-3">
        {/* 🟡 Routes disabled
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        */}

        {/* ✅ Single active component */}
        <TextForm
          showAlert={showAlert}
          heading="Enter text to analyze below"
          mode={mode}
        />
      </div>

      {/* 🟡 </Router> */}
    </>
  );
}