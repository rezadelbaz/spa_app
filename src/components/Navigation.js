import { withRouter, NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "AboutUs", to: "/about-us" },
  { name: "Profile", to: "/Profile" },
  { name: "Blogs", to: "/blogs" },
  { name: "Posts", to: "/posts" },
];

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
