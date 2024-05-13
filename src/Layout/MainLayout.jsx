import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";
import Footer from "../Component/Footer/Footer";
import { axiosSecure } from "../hooks/useExiosSecure";


const MainLayout = () => {
  const { mainUrl, user, logOut, setUser, setLoading } =
    useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target.id !== "user-img") {
      setShowDropdown(false);
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        axiosSecure
          .post(`${mainUrl}/logout`, { user: user?.email })
          .then((res) => {
            console.log(res);
            setLoading(false);
            navigate("/");
          })
          .catch((err) => console.log(err.message));

        toast.success("Logged out successfully!!");
        setUser(null);
      })
      .catch((err) => toast.error(err.message));
  };

  const navItems = (
    <>
      <li className="rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 rounded-none border-[#209CEE]"
              : "containers"
          }
          to="/"
        >
          Home<span></span>
        </NavLink>
      </li>
      <li className="rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 rounded-none border-[#209CEE]"
              : "containers"
          }
          to="/all"
        >
          <span>Browse All Jobs</span>
        </NavLink>
      </li>
 
      <li className="rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 rounded-none border-[#209CEE]"
              : "containers"
          }
          to="/add-job"
        >
          Add Job<span></span>
        </NavLink>
      </li>
      <li className="rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 rounded-none border-[#209CEE]"
              : "containers"
          }
          to="/my-job"
        >
        My Jobs<span></span>
        </NavLink>
      </li>
      <li className="rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 rounded-none border-[#209CEE]"
              : "containers"
          }
          to="/Applied-job"
        >
          <span>Applied jobs</span>
        </NavLink>
      </li>
      <li className="rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 rounded-none border-[#209CEE]"
              : "containers"
          }
          to="/b"
        >
          <span>Blogs</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div onClick={handleClick}>
      <div className="drawer relative">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="sticky top-0 mt-2 z-50 bg-white">
            <div className="w-full navbar max-w-7xl mx-auto justify-between">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="px-2 py-1">
                <img
                  className=""
                  src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/jobhub-logo.svg"
                  alt=""
                />
              </div>
              <div className="flex-none hidden lg:block gap-4">
                <ul className="menu menu-horizontal font-medium">{navItems}</ul>
              </div>

              <div>
                <ul className="menu menu-horizontal">
                  {user ? (
                    <div className="relative">
                      <img
                        id="user-img"
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="rounded-full cursor-pointer outline-[#209CEE] outline-4 outline  md:w-8 w-8 md:h-8 h-10 object-cover"
                        src={user.photoURL}
                        alt=""
                      />

                      <div
                        className={`absolute duration-500 ${
                          showDropdown
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        } bg-slate-100 py-5 px-6 rounded-lg right-0 top-[110%] z-40 space-y-3`}
                      >
                        <p className="whitespace-nowrap font-bold ">
                          {user?.displayName}
                        </p>
                        <button
                          onClick={handleLogOut}
                          className="btn btn-sm whitespace-nowrap flex gap-2 flex-nowrap bg-zinc-700 text-white"
                        >
                          <CiLogout></CiLogout>
                          Log Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Link to="/login" className="btn  bg-blue-500 text-white">
                      Log in
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="block">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-3">
            {navItems}
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
