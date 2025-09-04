import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function TopHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="px-6 py-2">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold text-heading ">Dashboard</h1>
            <p className="text-muted-foreground text-text_paragraph  xl:flex hidden">
              Welcome back! Here's what's happening with your program.
            </p>
            <p className="text-muted-foreground text-text_paragraph  xl:hidden block">
              Welcome back! Here's...
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              size="icon"
              variant="outline"
              className="bg-white p-3 shadow-md rounded-md"
            >
              <Bell className="w-4 h-4" />
            </button>

            <div ref={dropdownRef} className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="inline-block w-10 h-10 rounded-full ring-2 ring-gray-900 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
