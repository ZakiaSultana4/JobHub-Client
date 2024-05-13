import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Page/ErrorPage";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import AddJob from "../Page/AddJob";
import M from "../Page/My";
import UpdateJob from "../Page/UpdateJob";
import All from "../Page/All";
import Details from "../Page/Details";
import Applied from "../Page/Applied";
import Blogs from "../Page/Blogs";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all",
                element: <All/>
            },
            {
                path: "/add-job",
                element: <PrivateRoute><AddJob/></PrivateRoute>
            }, 
            {
                path: "/b",
                element: <PrivateRoute><Blogs/></PrivateRoute>
            }, 
            {
                path: "/my-job",
                element: <PrivateRoute><M/></PrivateRoute>,
            
   
            }, 
            {
                path: "/Applied-job",
                element: <PrivateRoute><Applied/></PrivateRoute>,
            
   
            }, 
            {
                path: "/job-update/:id",
                element: <PrivateRoute><UpdateJob/></PrivateRoute>,
                loader:({params})=>fetch(`https://jobhub-a11.vercel.app/job/${params.id}`)
   
            }, 
            {
                path: "/job/:id",
                element: <PrivateRoute><Details/></PrivateRoute>,
                loader:({params})=>fetch(`https://jobhub-a11.vercel.app/job/${params.id}`)
   
            }, 
           
        ]
    }, 
    {
        path: "/login",
        element: <SignIn/>
    },
    {
        path: "/register",
        element:<SignUp/> 
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    }
])

export default MainRouter;