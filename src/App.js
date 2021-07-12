import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { FeedList } from "./pages/FeedList";
import { FeedUpsert } from "./pages/FeedUpsert";
import { AppNav } from "./pages/AppNav";
import { useSelector } from "react-redux";

function App() {
  const history = useHistory();
  const state = useSelector((state) => state);
  return (
    <>
      <AppNav />
      <Route exact path="/" component={FeedList} />
      <Route exact path="/feed-upsert" component={FeedUpsert} />
      <Route exact path="/feed-list" component={FeedList} />
    </>
  );
}

export default App;
