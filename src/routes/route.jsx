import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import Donation from "../page/Donation";
import Statistics from "../page/Statistics";


const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: './home',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
]);

export default route;