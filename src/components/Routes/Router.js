import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Main from "../Layouts/Main";
import CoursesDetails from "../Pages/CourseDetails/CoursesDetails";
import Documentation from "../Pages/CourseDetails/Documentation";
import EnrollNow from "../Pages/EnrollNow/EnrollNow";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Payonline from "../Pages/PayOnline/Payonline";
import PlaceOrder from "../Pages/PlaceOrder/PlaceOrder";
import Prement from "../Pages/Prement/Prement";
import Register from "../Pages/Register/Register";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',element:<Home></Home>
            },
            {
                path:'/courses/:id',
                element:<CoursesDetails></CoursesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'/documentation/:id',
                element:<PrivateRoute><Documentation></Documentation></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/documents/${params.id}`)
            },
            {
                path:'/enrollnow/:id',
                element:<PrivateRoute><EnrollNow></EnrollNow></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/documents/${params.id}`)
            },
            {
                path:'/login',element:<Login></Login>
            },
            {
                path:'/register',element:<Register></Register>
            },
            {
                path:'/payonline/:id',
                element:<Payonline></Payonline>,
                loader:({params})=>fetch(`http://localhost:5000/documents/${params.id}`)
            },
            {
                path:'/placeorder/:id',
                element:<PlaceOrder></PlaceOrder>,
                loader:({params})=>fetch(`http://localhost:5000/documents/${params.id}`)

            },
            {
                path:'/prement',element:<Prement></Prement>
            }
        ]
    },
    
])