import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/authContext.jsx"
import { TodoProvider } from "./context/TodoContext.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <AuthProvider> */}
     <TodoProvider>
      <App />
      </TodoProvider> 
    {/* </AuthProvider> */}
  </BrowserRouter>
)