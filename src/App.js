import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";



// lazy import 
const Instamart = lazy(()=>import('./components/Instamart'));
// upon on Demand loading ->upon render -> suspended loading
// because react want to render before the js load in browser
// to handle this we use Suspense


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <AppLayout />,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element : <Body />,
      },
      {
        path: '/About',
        element : <About/>
      },
      {
        path: '/contact',
        element : <Contactus/>
      },
      {
        path: '/cart',
        element : <Cart/>
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/instamart',
        element: <Suspense><Instamart/></Suspense>
      }
    ]

  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router ={appRouter} />);
