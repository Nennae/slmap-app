import { Link } from "react-router-dom";
import { Fragment } from "react";
import Header from "./Header";

const Navbar = () => {
      return (
            <Fragment>
                  <Header/>
                  <Link to="/">Home</Link>
                  <Link to="/MapView">Map</Link>
            </Fragment>
      )
}

export default Navbar;