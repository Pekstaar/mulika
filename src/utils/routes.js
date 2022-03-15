import { Home, Recordings, Report, Riders, ViewRider } from "../pages";
import { Alerts, AuthRiders, Login, Register } from "../pages/authority";
import Record from "../pages/record/Record";
// import Test2 from "../pages/record/Record";

export const useRouter = () => [
  // Normal User Routes
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/record",
    element: <Record />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/recording",
    element: <Recordings />,
  },

  {
    path: "/riders",
    element: <Riders />,
  },

  {
    path: "/riders/:id",
    element: <ViewRider />,
  },
  // End of Normal User Routes.

  // Authority Routes beginning
  {
    path: "/auth",
    element: <Alerts />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/auth/recordings",
    element: <></>,
  },

  {
    path: "/auth/riders",
    element: <AuthRiders />,
  },

  {
    path: "/auth/riders/:id",
    element: <></>,
  },
  // End of Authority Routes
];
