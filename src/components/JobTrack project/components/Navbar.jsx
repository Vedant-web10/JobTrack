import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="navbar-brand">JobTrack</h3>

      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/add-job">Add Job</Link>
      </div>
    </nav>
  );
}
export default Navbar;
