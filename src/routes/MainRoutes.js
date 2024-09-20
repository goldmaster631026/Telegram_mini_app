import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import Friends from "../pages/friends";
import Shop from "../pages/shop";
import EarnCash from "../pages/earncash";
import Wallet from "../pages/wallet";

const MainRoutes = {
  path: "/",
  children: [
    {
        path : "/",
        element : <Home />
    },
    {
        path:"/home",
        element: <Navigate to = "/"/>
    },
    {
        path : "/earncash",
        element : <EarnCash />
    },
    {
        path : "/shop",
        element : <Shop />
    },
    {
        path : "/friends",
        element : <Friends />
    },
    {
        path : "/wallet",
        element : <Wallet />
    },
  ],
};


export default MainRoutes;