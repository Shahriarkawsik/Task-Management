import { createRoot } from "react-dom/client";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
