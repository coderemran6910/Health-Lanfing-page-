const Navbar = () => {
  return (
    <div className=" bg-white flex justify-center py-5  ">
      <div className="container  navbar bg-base-100   flex   ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Benifit</a>
              </li>
              <li>
                <a>Health Tips</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className=" cursor-pointer  text-xl">
            <div className="flex flex-col justify-center">
              <h2 className=" uppercase text-rose-950 text-2xl font-extrabold tracking-wide">
                MY HEALTH
              </h2>
              <p className=" uppercase text-rose-950 tracking-wide">Accecc point </p>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Benifit</a>
            </li>
            <li>
              <a>Health Tips</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="btn btn-outline border-[#ff0009] border-2 mr-4 w-[162px] ">Free Consultaion</button>
          <button className="btn bg-[#ff0009]  w-[121px] text-white">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
