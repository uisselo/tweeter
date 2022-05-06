import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Form inputs are validated!");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <p className="fs-5 my-4">Login</p>
      <div class="form-floating mb-2">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="Email Address"
          required
        />
        <label for="floatingInput">Email Address</label>
      </div>
      <div class="form-floating mb-2">
        <input
          type="password"
          class="form-control"
          id="floatingInput"
          placeholder="Password"
          required
        />
        <label for="floatingInput">Password</label>
      </div>
      <div class="d-grid mb-4">
        <button class="btn btn-dark" type="submit">
          Login
        </button>
      </div>
      <Link to="/signup">
        <small>Not registered yet?</small>
      </Link>
    </form>
  );
};

export default Login;
