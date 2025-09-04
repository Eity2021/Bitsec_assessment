import { Suspense } from "react";
import Data from "../pages/bitsec/users/Data";
import Dashboard from "../pages/bitsec/dashboard";
import { LayoutDashboard, BetweenHorizontalEnd, ListEnd } from "lucide-react";

const AllRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    name: "Users Data",
    icon: <BetweenHorizontalEnd size={20} />,
    children: [
      {
        path: "dataLists",
        name: "Data",
        icon: <ListEnd size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Data />
          </Suspense>
        ),
      },
    ],
  },
];

export default AllRoutes;
