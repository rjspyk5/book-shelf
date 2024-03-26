import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const menu = (
    <>
      {" "}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border border-pri bg-transparent text-pri font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive
              ? "border border-pri bg-transparent text-pri font-semibold"
              : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/read"
          className={({ isActive }) =>
            isActive
              ? "border border-pri bg-transparent text-pri font-semibold"
              : ""
          }
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coming"
          className={({ isActive }) =>
            isActive
              ? "border border-pri bg-transparent text-pri font-semibold"
              : ""
          }
        >
          Coming soon
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bestseller"
          className={({ isActive }) =>
            isActive
              ? "border border-pri bg-transparent text-pri font-semibold"
              : ""
          }
        >
          Bestseller books
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 font-work-sans py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm md:btn-md  btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-sm md:btn-md btn-ghost  text-xl md:text-2xl font-bold"
        >
          Books Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">{menu}</ul>
      </div>
      <div className="navbar-end flex gap-2 *:text-[white]">
        <NavLink className="btn-sm btn md:btn-md bg-pri  ">Button</NavLink>
        <NavLink className="btn-sm btn md:btn-md bg-[#59C6D2]">Button</NavLink>
      </div>
    </div>
  );
};
