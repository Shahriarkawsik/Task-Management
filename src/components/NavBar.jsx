import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="text-white text-center min-h-screen lg:px-3 lg:py-5 lg:space-y-10">
      <h1 className="lg:text-3xl">Task Management</h1>
      <ul className="lg:space-y-5">
        <li>
          <NavLink>TO-DO</NavLink>
        </li>
        <li>
          <NavLink>On Progress</NavLink>
        </li>
        <li>
          <NavLink>Done</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
