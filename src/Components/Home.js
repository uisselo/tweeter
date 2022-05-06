import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="my-4">
        <p className="fs-5">Welcome! Join Tweeter today.</p>
      </div>
      <div class="d-grid gap-2">
        <Link to="/login" class="btn btn-warning" type="button">
          Login
        </Link>
        <Link to="/signup" class="btn btn-dark" type="button">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Home;
