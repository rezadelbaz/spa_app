import { Link } from "react-router-dom";

const Post = (props) => {
  const id = props.match.params.id || 1;
  return (
    <div>
      Post Detail - {id}
      <div>
        <Link to={`/posts/${parseInt(id) + 1}`}>go to next Post</Link>
      </div>
    </div>
  );
};

export default Post;
