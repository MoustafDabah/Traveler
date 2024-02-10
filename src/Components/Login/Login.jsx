import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section class="py-3 py-md-5 py-xl-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div class="mb-5">
              <h4 class="text-center mb-4">Log In</h4>
            </div>
            <div class="card border border-light-subtle rounded-4">
              <div class="card-body p-3 p-md-4 p-xl-5">
                <form>
                  <div class="row gy-3 overflow-hidden">
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                        <label for="email" class="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input
                          type="password"
                          class="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          required
                        />
                        <label for="password" class="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <Link to='/' class="btn btn-primary btn-lg" type="submit">
                          Log In
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
              <p class="m-0 text-secondary text-center">
                Don't have an account?
                <Link
                  to="/registration"
                  class="link-primary text-decoration-none"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
