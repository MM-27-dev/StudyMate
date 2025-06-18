import "./App.css";
import LandingPage from "./components/HomePage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import AuthProvider from "./HOC/AuthProvider";

import PrivateRoute from "./HOC/PrivateRoute";
import PublicRoute from "./HOC/PublicRoute";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: 
        <LandingPage />,
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      ),
    },
    {
      path: "/dashbord",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
  ]);

  return (
    <Provider store={appStore}>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </Provider>
  );
}

export default App;
