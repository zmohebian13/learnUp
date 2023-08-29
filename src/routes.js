import Index from "./Pages/Index/Index";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Courses from "./Pages/Courses/Courses";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import Blog from "./Pages/Blog/Blog";
import AboutUs from "./Pages/AboutUs/AboutUs";
import BuyBasket from "./Pages/BuyBasket/BuyBasket";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info", element: <CourseInfo /> },
  { path: "/courses", element: <Courses /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/blog", element: <Blog /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/basket", element: <BuyBasket /> },
];

export default routes;
