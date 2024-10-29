import { HiOutlineViewGrid, HiOutlineCube } from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "trips",
    label: "Trips",
    path: "/trips",
    icon: <HiOutlineCube />,
  },
];
