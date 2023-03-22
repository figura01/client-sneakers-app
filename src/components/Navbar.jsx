import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={`shop`}>Eshop</Link>
      <Link to={`#`}>Blog</Link>

    </nav>
  );
};

export default Navbar;
