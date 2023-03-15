import React from "react";
import RootLayout from "./components/Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import AboutPages from "./pages/AboutPages";
import HomePages from "./pages/HomePages";
import GlobalStyle from "./components/GlobalStyle";
import ContactPages from "./pages/ContactPages";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePages />
        },
        {
          path: "/hakkimizda",
          element: <AboutPages />
        },
        {
          path: "/iletisim",
          element: <ContactPages/>
        }
      ]
    }
  ])
  return (
    <div>
        <RouterProvider router={router} />
        <GlobalStyle />

    </div>

  );
}

export default App;
