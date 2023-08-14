import Index from "./Pages/Index/Index";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Courses from "./Pages/Courses/Courses";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import Blog from "./Pages/Blog/Blog";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/courses", element: <Courses /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/blog", element: <Blog /> },
];

export default routes;
