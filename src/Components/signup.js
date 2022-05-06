import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Form inputs are validated!");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <p className="fs-5 my-4">Sign Up</p>
      <div class="row g-2 mb-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="First Name"
              required
            />
            <label for="floatingInput">First Name</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
              required
            />
            <label for="floatingInput">Last Name</label>
          </div>
        </div>
      </div>
      <div class="form-floating mb-2">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="Email Address"
          required
        />
        <label for="floatingInput">Email address</label>
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
          Complete
        </button>
      </div>
      <Link to="/login">
        <small>Already have an account?</small>
      </Link>
    </form>
  );
};

export default SignUp;
