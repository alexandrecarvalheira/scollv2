import { Web3Button } from "@web3modal/react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="navbar font-bold z-30 bg-black text-slate-50">
        <div className="navbar-start">
          <div className="dropdown  hover:text-white  rounded-lg">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52   "
            >
              <li>
                <Link passHref href={"/play"}>
                  Play
                </Link>
              </li>
              <li>
                <Link href={"/leaderboard"}>Leaderboard</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl  hover:bg-gray-600 "
          >
            Scroll Kingdoms
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-4  ">
            <li className=" rounded-lg  hover:bg-gray-600 ">
              <Link passHref href={"/play"}>
                Play
              </Link>
            </li>

            <li className=" rounded-lg  hover:bg-gray-600 ">
              <Link href={"/leaderboard"}>Leaderboard</Link>
            </li>

            <li className=" rounded-lg  hover:bg-gray-600 ">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-4">
          <Web3Button label="Connect Wallet" avatar="hide" icon="hide" />
        </div>
      </div>
    </>
  );
}
