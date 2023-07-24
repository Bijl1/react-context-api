import { createContext } from "react";
 
const ThemeContext = createContext();
 
 
// CREATE A WRAPPER COMPONENT
function ThemeProviderWrapper(props) {
 
  return (
    {/* SET UP THE PROVIDER */}
    <ThemeContext.Provider value={"dark"}>
        {props.children}
    </ThemeContext.Provider>
  )
}
 
export { ThemeContext, ThemeProviderWrapper };