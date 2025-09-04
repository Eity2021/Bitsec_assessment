import { useState } from "react";
import { Link, Routes, Route } from "react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../../constants/header/Header";
import AllRoutes from "../../routes/AllRoutes";
import DetailsPage from "../../pages/admin/detailsPage/DetailsPage";

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const routes = AllRoutes;

  const renderRoutes = (routes) =>
    routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));

  return (
    <div className="flex w-full ">
      <div className="">
        <div
          className={`bg-[#252F3F] text-white w-72 space-y-6 py-7 px-2 fixed md:sticky top-0 left-0 h-screen z-20 transform shadow-2xl rounded-r-2xl ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition duration-300 ease-in-out`}
        >
          <div className="flex justify-around mb-10">
            <h1 className="text-2xl font-semibold text-center ">
              Dashboard
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <nav>
            {routes.map((link, index) => (
              <div key={index} className="mb-2">
                <div
                  className="flex items-center justify-between py-2.5 px-4 cursor-pointer rounded transition duration-200 text-[#fff] hover:bg-[#161E2E]"
                  onClick={() => (link.children ? toggleMenu(link.name) : null)}
                >
                  <Link
                    to={link.path}
                    className="flex-1 flex gap-2 font-roboto font-semibold text-base"
                  >
                    <p className="flex items-center">{link.icon}</p>
                    <p className="flex items-center"> {link.name}</p>
                  </Link>
                  {link.children &&
                    (openMenus[link.name] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
                </div>

                {link.children && openMenus[link.name] && (
                  <div
                    className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      openMenus[link.name]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={`/${child.path}`}
                        className=" py-2 px-4 text-white  rounded hover:bg-[#161E2E] font-roboto text-base transition duration-200 flex  items-center  gap-2"
                      >
                        <p className="flex items-center ">{child.icon}</p>
                        <p className="flex items-center">{child.name}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className="flex-1 flex flex-col h-screen">
        <Header isOpe={isOpen} setIsOpen={setIsOpen}></Header>
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Routes>
            {renderRoutes(routes)}
            <Route path="/Details" element={<DetailsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
