import { createBrowserRouter } from "react-router-dom";
import Login from "../../../authentication/login/Login";
import Register from "../../../authentication/register/Register";
import About from "../../about/About";
import AboutForm from "../../about/AboutForm";
import Home from "../../Home/home/Home";
import Auth from "../../layout/Auth";
import Main from "../../layout/Main";
import Detail from "../../other/detail/Detail";
import Inbox from "../../other/inbox/Inbox";
import Media from "../../other/media/Media";
import Notifications from "../../other/notifications/Notifications";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRouter><Main></Main></PrivateRouter>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/inbox',
                element: <Inbox></Inbox>
            },
            {
                path: '/notifications',
                element: <Notifications></Notifications>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/about/:email',
                element: <About></About>,
                loader: ({ params }) => fetch(`http://localhost:5000/profile/${params.email}`)
            },
            {
                path: '/detail/:id',
                element: <Detail></Detail>,
                loader: ({ params }) => fetch(`http://localhost:5000/uploaded/${params.id}`)
            },
            {
                path: '/aboutForm',
                element: <AboutForm></AboutForm>
            }

        ]
    },
    {
        path: '/auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    }
]);

export default router;