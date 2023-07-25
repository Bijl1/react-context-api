import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import the Router component
import App from "./App"; // Import the App component
import { ThemeProviderWrapper } from "./context/theme.context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>   {/*  <== ADD  */}
        <App />
      </ThemeProviderWrapper>  {/*  <== ADD  */}
    </Router>
  </React.StrictMode>
);
 
reportWebVitals();