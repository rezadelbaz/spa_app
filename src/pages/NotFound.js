import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>صفحه مورد نظر یافت نشد</p>
      <Link to="/">برگشت به صفحه اصلی</Link>
    </>
  );
};

export default NotFound;
