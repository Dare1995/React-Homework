// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/authContext";
// import Navbar from "./pages/navbar";
// import Home from "./pages/home";
// import Login from "./pages/login";
// import Dashboard from "./pages/dashboard";
// import Profile from "./pages/profile";
// import ProtectedRoute from "./pages/protectedRoute";
// import NotFound from "./pages/notFound";
import { TodoProvider } from "./context/todoContext";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";

// const App = () => {
//   return (
//     <div>
//     <AuthProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//           <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//     </AuthProvider>
//     </div>
//   );
// };

const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;