import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivateRoute from "../routes/PrivateRoute";
import ParcelForm from "../pages/ParcelForm/ParcelForm";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import BeARider from "../pages/Dashboard/BeARider/BeARider";
import PendingRiders from "../pages/Dashboard/PendingRiders/PendingRiders";
// import ActiveRiders from "../pages/Dashboard/AdminHireList/AdminHireList";
import Services from "../pages/Home/Services/Services";
import AdminHireList from "../pages/Dashboard/AdminHireList/AdminHireList";








export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "*",
          Component: ErrorPage
        },
        {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path: "/about",
        Component: AboutUs
      },
      {
        path: "/services",
        Component: Services
      },
      {
        path: "/rider",
        element: <PrivateRoute><BeARider></BeARider></PrivateRoute>
      },
      {
        path: "/addParcel",
        element: <PrivateRoute><ParcelForm></ParcelForm></PrivateRoute>,
        loader: ()=> fetch('/serviceCenters.json').then(res => res.json())
      }
    ]
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      
    ]
  },

  // Dashboard 

  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>,
    children: [
      {
        path: 'myParcels',
        Component: MyParcels
        // element: <PrivateRoute><MyParcels></MyParcels></PrivateRoute>
      },

      {
        path: 'payment/:id',
        Component: Payment
      },

      {
        path: 'paymentHistory',
        Component: PaymentHistory
      },
      {
        path: 'pending-riders',
        Component: PendingRiders
      },
      {
        path: 'hires',
        Component: AdminHireList
      }

    ]
  }
]);