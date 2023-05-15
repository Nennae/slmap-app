import { Link } from "react-router-dom";
import { Fragment } from "react";
import Header from "./Header";

const Navbar = () => {
      return (
            <Fragment>
                  <Header/>
                  <Link to="/" style={{ textDecoration: 'none', color:'#333734 ', fontSize: '2rem', fontWeight: '500', padding: '25px' }}>Home</Link>
                  <Link to="/MapView" style={{ textDecoration: 'none', color:'#333734 ', fontSize: '2rem', fontWeight: '500', padding: '25px'}}>Map</Link>
            </Fragment>
      )
}

export default Navbar;