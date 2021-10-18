import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layouts/Layouts";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
      {/* <Route path="/" component={HomePage} exact={true} /> */}
    </Layout>
  );
}

export default App;
