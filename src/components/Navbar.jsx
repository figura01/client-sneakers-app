import Appbar from "muicss/lib/react/appbar";
import { Link } from "react-router-dom";
// import Input from "muicss/lib/react/input";

const Navbar = () => {
  return (
    <div>
      <Appbar>
      </Appbar>
      <Link to={`login`}>Login</Link>
      <Link to={`panier`}>panier</Link>
      <Link to={`product`}>product</Link>
      <Link to={`shop`}>shop</Link>
      <Link to={`signup`}>signup</Link>

    </div>
  );
};

export default Navbar;
