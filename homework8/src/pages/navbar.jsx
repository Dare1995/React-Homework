// function Navbar() {
//   const { isAutheticated, logout } = useContext(AuthContext)

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {isAutheticated ? (
//           <>
            // <li>
            //   <Link to="/dashboard">Dashboard</Link>
            // </li>
            // <li>
            //   <Link to="/profile">Profile</Link>
            // </li>
            // <li>
            // <button onClick={logout}>Logout</button>
            // </li>
//           </>
//         ) : (
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   )
// }

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;