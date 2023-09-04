import Index from "./Pages/Index/Index";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Courses from "./Pages/Courses/Courses";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import Blog from "./Pages/Blog/Blog";
import AboutUs from "./Pages/AboutUs/AboutUs";
import BuyBasket from "./Pages/BuyBasket/BuyBasket";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/404/NotFound";
import Register from "./Pages/Register/Register";
import ContactUs from "./Pages/ContactUs/ContactUs";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info", element: <CourseInfo /> },
  { path: "/courses", element: <Courses /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/blog", element: <Blog /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/basket", element: <BuyBasket /> },
  { path: "/login", element: <Login /> },
  { path: "/404", element: <NotFound /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <ContactUs /> }
];

export default routes;
