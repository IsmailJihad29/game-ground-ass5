import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import NotFoundRoute from "../pages/shared/NotFoundRoute";
import Hero from "../pages/home/Hero";
import CustomerTestimonials from "../pages/home/CustomerTestimonials";
import WhoCanUse from "../pages/home/WhoCanUse";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ContactUs from "../pages/contact/ContactUs";
import FacilityListing from "../pages/facility/FacilityListing";
import Booking from "../pages/booking/Booking";
import FacilityDetails from "../pages/facility/FacilityDetails";

import HowItWorks from "../pages/home/HowItWorks";
import FeaturedFacilities from "../pages/home/FeaturedFacilities";
import UserDashBoard from "../pages/dashboard/user/UserDashBoard";
import UserContent from "../pages/dashboard/user/UserContent";
import UserBooking from "../pages/dashboard/user/UserBooking";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import AdminMainContent from "../pages/dashboard/admin/AdminContent";
import AdminBooking from "../pages/dashboard/admin/AdminBooking";
import AdminFacilityManagement from "../pages/dashboard/admin/AdminFacilityManagement";
import AboutUs from "../pages/about/AboutUs";
import UpcomingTournaments from "@/pages/home/UpcomingTournaments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <FeaturedFacilities />
            <WhoCanUse />
            <HowItWorks />
            <UpcomingTournaments />
            <CustomerTestimonials />
          </>
        ),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "facility-listing",
        element: <FacilityListing />,
      },
      {
        path: "facility-listing/:id",
        element: <FacilityDetails />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "booking/:id",
        element: <Booking />,
      },
    ],
  },
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: (
          <>
            <AdminMainContent />
          </>
        ),
      },

      {
        path: "booking",
        element: <AdminBooking />,
      },
      {
        path: "create-account",
        element: <Register />,
      },
      {
        path: "facility-management",
        element: <AdminFacilityManagement />,
      },
    ],
  },
  {
    path: "user/dashboard",
    element: <UserDashBoard />,
    children: [
      {
        index: true,
        element: (
          <>
            <UserContent></UserContent>
          </>
        ),
      },

      {
        path: "my-booking",
        element: <UserBooking />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
]);

export default router;
