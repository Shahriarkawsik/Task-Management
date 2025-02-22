import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12">
      <header className="lg:col-span-2 bg-color2">
        <NavBar />
      </header>
      <main className="lg:col-span-10 bg-color1">
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
