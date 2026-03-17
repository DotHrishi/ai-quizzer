import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { LightMode, DarkMode } from "@mui/icons-material";

export default function Navbar() {

  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(1);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    checkAuth();
    window.addEventListener("authChange", checkAuth);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 250; 

      const newOpacity = Math.max(1 - scrollY / maxScroll, 0.3); 
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  return (
    <nav className="relative z-50 w-full bg-black border-b p-2 sticky top-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/quizzette-high-resolution-logo.png"
            alt="Quizzette Logo"
            className="h-9 drop-shadow-[0_0_10px_rgba(255,107,53,0.3)]"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 text-gray-400 hover:text-white transition-colors bg-neutral-900 border border-neutral-700 rounded-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 h-10 w-10 md:h-12 md:w-12"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <LightMode fontSize="small" className="text-yellow-400" /> : <DarkMode fontSize="small" />}
          </button>

          <button
            onClick={() => navigate("/giveQuizzes")}
            className="font-semibold text-white hover:text-black bg-blue-600 px-3 py-1.5 rounded-md transition h-12"
          >
            Quizzes
          </button>

          {user ? (
            <div className="relative group z-50">
              <button className="flex items-center justify-center h-12 px-6 rounded-md bg-neutral-900 border border-blue-500 text-green-400 font-bold tracking-wide transition-all group-hover:bg-neutral-800 focus:outline-none">
                {user.username}
                <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown menu */}
              <div className="absolute right-0 w-48 mt-1 py-2 bg-neutral-900 border border-neutral-700 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right transform group-hover:translate-y-0 -translate-y-2">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-neutral-800 hover:text-red-300 font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <button onClick={() => navigate("/login")} className="group relative inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 border border-green-500">
                <span>Login</span>
                <div class="relative ml-1 h-5 w-5 overflow-hidden">
                  <div class="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>

              <button onClick={() => navigate("/signup")} className="group relative inline-flex h-12 items-center justify-center rounded-md px-6 font-medium text-black bg-green-500">
                <span>SignUp</span>
                <div class="relative ml-1 h-5 w-5 overflow-hidden">
                  <div class="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Blue line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#002aff]" />
    </nav>
  );
}
