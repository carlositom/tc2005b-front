import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <main className="flex flex-col lg:flex-row h-auto lg:h-screen w-full bg-gradient-to-r from-blue-900 to-violet-900">
      <nav className="flex h-1/6 lg:h-auto lg:flex-col w-auto lg:w-1/6 items-center bg-aulify-light-blue/10 rounded-xl m-2">
        <div className="flex justify-center items-center lg:w-full w-1/4">
          <img
            src="../src/assets/AulifyLogo.png"
            alt=""
            className="w-full px-4 my-4 justify-center items-center"
          />
        </div>
        <Link to="/Dashboard" className="mx-2 my-2 text-white p-2">
          Dashboard
        </Link>
        <Link to="/Users" className="mx-2 my-2 text-white p-2">
          Users
        </Link>
        <input
          type="button"
          onClick={logout}
          value="Logout"
          className="bg-white text-blue-900 rounded-3xl lg:mt-auto lg:mb-4 ml-auto mr-4 lg:m-auto p-2 w-auto lg:w-2/3 justify-self-end"
        />
      </nav>
      <section className="w-full lg:w-5/6">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
