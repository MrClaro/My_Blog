import { Link } from "react-router-dom";

export default function Heaer() {
  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        <Link to="/Login" className="login">
          Login
        </Link>
        <Link to="/Register" className="Register">
          Register
        </Link>
      </nav>
    </header>
  );
}
