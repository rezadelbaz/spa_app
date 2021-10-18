import { Link } from "react-router-dom";
import querystring from "query-string";
const Blog = ({ location, match }) => {
  const query = querystring.parse(location.search);
  console.log(query.sort);
  const id = match.params.postid || 1;
  return (
    <div>
      Blog Detail - {id}
      <div>
        <Link to="/blogs">go to blog page</Link>
      </div>
    </div>
  );
};

export default Blog;
