import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li tabIndex="0">
                <a className="justify-between">
                  Select Theme
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a onClick={() => setTheme("dark")}>Dark Theme</a>
                  </li>
                  <li>
                    <a onClick={() => setTheme("night")}>Night</a>
                  </li>
                  <li>
                    <a onClick={() => setTheme("black")}>Black Theme</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">HARSHA</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li tabIndex="0">
              <a>
                Select Theme
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a onClick={() => setTheme("dark")}>Dark Theme</a>
                </li>
                <li>
                  <a onClick={() => setTheme("night")}>Night</a>
                </li>
                <li>
                  <a onClick={() => setTheme("black")}>Black Theme</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <button className="btn !text-black btn-accent px-4 ">
                  Blog
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1mq4xgR7rkWiYJqHvebqdO5E7uwC0-WpR/view?usp=sharing"
            className="btn btn-outline btn-success"
            download="Harshwardhan's Resume"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
