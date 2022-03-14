import { Home, Recordings, Report, Riders, ViewRider } from "../pages";
import { Alerts } from "../pages/authority";
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
    ement: <></>,
  },
  {
    path: "/auth/register",
    element: <></>,
  },
  {
    path: "/auth/recordings",
    element: <></>,
  },

  {
    path: "/auth/riders",
    element: <></>,
  },

  {
    path: "/auth/riders/:id",
    element: <></>,
  },
  // End of Authority Routes
];
