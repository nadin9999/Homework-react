import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { LookBook } from "./pages/Lookbook/Lookbook";
import { Features } from "./pages/Features/Features";
import { Pages } from "./pages/Pages/Pages";
import { Cart } from "./pages/Cart/Cart";
import Layout from './components/Layout/Layout';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home /></Layout>,
    },
    {
      path: "/Shop",
      element: <Layout><Shop /></Layout>,
    },
    {
      path: "/lookbook",
      element: <Layout><LookBook /></Layout>,
    },
    {
      path: "/features",
      element: <Layout><Features /></Layout>,
    },
    {
      path: "/pages",
      element: <Layout><Pages /></Layout>,
    },
    {
      path: "/cart",
      element: <Layout><Cart /></Layout>,
    },
    {
      path: "*", // Обработчик для всех несуществующих маршрутов
      element: <Home />
    }
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
