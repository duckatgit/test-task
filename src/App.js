import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchJobs from "./pages/searchJobs/SearchJobs";
import AppliedJobs from "./pages/appliedJobs/AppliedJobs";
import SavedJobs from "./pages/savedJobs/SavedJobs";
import Layout from "./components/layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchJobs />,
  },
  {
    path: "/applied",
    element: <AppliedJobs />,
  },
  {
    path: "/saved",
    element: <SavedJobs />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
