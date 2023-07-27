import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Rootlayoutmain from "./componentsvidhya/Rootlayoutmain";
import Home from "./componentsvidhya/Home"
import Login from "./componentsvidhya/Login";
import Signin from "./componentsvidhya/Signin";
import Logo from "./componentsvidhya/Logo";
import Learning from "./componentsvidhya/Learning";
import Mentoring from "./componentsvidhya/Mentoring";
import Practice from "./componentsvidhya/Practice";
import Jobs from "./componentsvidhya/Jobs";
import Courses from "./componentsvidhya/Courses";
import App3 from "./App3";
import App2 from "./App2";
import App1 from "./App1";
import Community from "./community/Community";
import Competetions from "./components/Competetions";
import Hackathons from "./components/Hackathons";
import Quizzes from "./components/Quizzes";
import Rootlayout from "./components/Rootlayout";
import Webdevelopment from "./courses/Webdevelopment";
import Programming from "./courses/Programming";
import Digitalmarketing from "./courses/Digitalmarketing";
import Communication from "./courses/Communication";
import Rootlayout2 from "./courses/Rootlayout2";


function App() {
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Rootlayoutmain/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        // {
        //   path:'/Login',
        //   element:<Login/>
        // },
        // {
        //   path:'/signin',
        //   element:<Signin/>

        // },
        {
          path:'/Logo',
          element:<Logo/>
        },
        {
          path:'/compete',
          element:<Rootlayout/>,
          children:[
            {
              path:'/compete',
              element:<Competetions/>
            },
            {
              path:'Hackathons',
              element:<Hackathons/>
            },
            {
              path:'Quizzes',
              element:<Quizzes/>
            }
          ]
        },
        {
          path:'/Mentoring',
          element:<App3/>
        },
        {
          path:'/Practice',
          element:<Practice/>
        },
        {
          path:'/community',
          element:<Community/>
        },
        {
          path:'/courses',
          element:<Rootlayout2/>,
          children:[
            {
              path:'/courses',
              element:<Programming/>
            },
            {
              path:'/courses/webdevelopment',
              element:<Webdevelopment/>
            },
            {
              path:'/courses/digitalmarketing',
              element:<Digitalmarketing/>
            },
            {
              path:'/courses/communication',
              element:<Communication/>
            }
          ]
        }
      ]
    }
  ]
)
  
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
