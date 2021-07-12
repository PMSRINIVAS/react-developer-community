import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateRenderAction } from "../redux/FeedReducer";

export const AppNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const clearFeedUref = () => {
    dispatch(updateRenderAction({}));
    history.push("/feed-upsert");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">DEVELOPER COMMUNITY APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/feed-list">
            Feed List
          </Nav.Link>
          <Nav.Link onClick={clearFeedUref}>Feed Upsert</Nav.Link>
          {/* <Nav.Link onClick={signOut}>SIGN OUT</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
