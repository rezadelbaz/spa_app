import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Post from "./pages/PostPage";
import Blog from "./components/Blogs";
const routes = [
  { path: "/blogs/:postid", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/posts/:id([0-9]+)?", component: Post },
  { path: "/about-us", component: AboutUs },
  { path: "/profile", component: Profile },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
